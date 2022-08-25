import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllStudentsUseCase } from './ListAllStudentsUseState';

class ListAllStudentsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listAllStudentsUseCase = container.resolve(ListAllStudentsUseCase);

        const students = await listAllStudentsUseCase.execute();

        return res.status(201).json(students);
    }
}

export { ListAllStudentsController };
