import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { Student } from '../../infra/mongoose/entities/Student';
import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class PaginateStudentsUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (page: number): Promise<Array<typeof Student>> {
        const student = await this.studentRepository.paginate(page);
    
        return student;
    }
}

export { PaginateStudentsUseCase };