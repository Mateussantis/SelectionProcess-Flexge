import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateStudentUseCase } from './UpdateStudentUseCase';

class UpdateStudentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            age,
            course,
            school
        } = req.body;

        const { _id } = req.params;

        const updateStudentUseCase = container.resolve(UpdateStudentUseCase);

        const student = {
            name,
            age,
            course,
            school
        };

        await updateStudentUseCase.execute(student, _id);

        return res.status(201).json({ msg: 'The Student was edited !'});
    }
}

export { UpdateStudentController };
