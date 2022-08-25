import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class DeleteStudentUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (_id: string): Promise<void> {
        await this.studentRepository.deleteOneStudent(_id);
    }
}

export { DeleteStudentUseCase };