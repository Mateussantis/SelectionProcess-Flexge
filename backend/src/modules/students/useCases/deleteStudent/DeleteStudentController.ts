import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { DeleteStudentUseCase } from './DeleteStudentUseCase';

class DeleteStudentController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { _id } = req.params;
            
            const deleteStudentUseCase = container.resolve(DeleteStudentUseCase);
            
            await deleteStudentUseCase.execute(_id);
            
            return res.status(201).json({ msg: 'The Student was deleted !'});
        }
        catch {
            throw new AppError('The sistem require a valid Id to delete!');
        }
    }
}

export { DeleteStudentController };
