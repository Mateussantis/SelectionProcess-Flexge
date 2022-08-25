import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { Student } from '../../infra/mongoose/entities/Student';
import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class ConsultStudentUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (name: string): Promise<Array<typeof Student>> {
        const student = await this.studentRepository.consultByName(name);
    
        return student;
    }
}

export { ConsultStudentUseCase };