import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../../../../modules/users/infra/mongoose/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token Missing!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "criptografiaMateus"
        ) as IPayload;
        console.log(user_id);

        const usersRepository = new UserRepository();

        const user = await usersRepository.findOneById(user_id);

        if (!user) {
            throw new AppError("User does not exist!", 401);
        }

        req.user  = {
            _id: user_id,
        };

        next();
    } catch {
        throw new AppError("Invalid Token!", 401);
    }
}
