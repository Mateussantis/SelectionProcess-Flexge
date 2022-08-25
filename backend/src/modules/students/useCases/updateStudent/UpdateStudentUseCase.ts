import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { IStudent } from '../../dtos/IStudentDTO';
import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class UpdateStudentUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (student: IStudent, _id: string): Promise<void> {
        const studentAlreadyExists = await this.studentRepository.findOneById(_id);
        
        if (!studentAlreadyExists) {
            throw new AppError('Student not found!');
        }
        
        await this.studentRepository.updateOneUser(student, _id);

    }
}

export { UpdateStudentUseCase };