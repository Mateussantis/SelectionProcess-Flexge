import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { Student } from '../../infra/mongoose/entities/Student';
import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class ListAllStudentsUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (): Promise<Array<typeof Student>> {
        return await this.studentRepository.listStudents();
    }
}

export { ListAllStudentsUseCase };