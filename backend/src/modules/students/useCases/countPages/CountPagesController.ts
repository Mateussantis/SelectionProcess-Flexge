import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CountPagesUseCase } from './CountPagesUseCase';

class CountPagesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const countPagesUseCase = container.resolve(CountPagesUseCase);

        const student = await countPagesUseCase.execute();

        return res.status(201).json(student);
    }
}

export { CountPagesController };
