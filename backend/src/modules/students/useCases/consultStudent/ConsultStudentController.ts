import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ConsultStudentUseCase } from './ConsultStudentUseCase';

class ConsultStudentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const consultStudentUseCase = container.resolve(ConsultStudentUseCase);

        const { name } = req.params;

        const student = await consultStudentUseCase.execute(name);


        return res.status(201).json(student);
    }
}

export { ConsultStudentController };
