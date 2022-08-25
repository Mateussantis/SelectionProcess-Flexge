import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateStudentUseCase } from './CreateStudentUseCase';

class CreateStudentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            age,
            course,
            school
        } = req.body;

        const createStudentUseCase = container.resolve(CreateStudentUseCase);

        const student = {
            name,
            age,
            course,
            school
        };

        await createStudentUseCase.execute(student);

        return res.status(201).json({ msg: 'The Student was registered !'});
    }
}

export { CreateStudentController };
