import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class CountPagesUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (): Promise<Number> {
        return await this.studentRepository.countPages();
    }
}

export { CountPagesUseCase };