import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { PaginateStudentsUseCase } from './PaginateStudentsUseCase';

class PaginateStudentsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const paginateStudentsUseCase = container.resolve(PaginateStudentsUseCase);

        const { page } = req.query;

        const student = await paginateStudentsUseCase.execute(Number(page));

        return res.status(201).json(student);
    }
}

export { PaginateStudentsController };
