import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import mongoose from 'mongoose';
import cors from 'cors';

import './container';

import { AppError } from './errors/AppError';
import { router } from "./infra/routes";

import { config } from 'dotenv';

const app = express();

config();

app.use(express.json());
app.use(cors());
app.use(router);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.8dbpl.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3333, () => console.log("Server is running!"));
    }).catch((err) => console.error(err));
