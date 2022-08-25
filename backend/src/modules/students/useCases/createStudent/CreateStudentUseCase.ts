import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { ICreateStudentDTO } from '../../dtos/ICreateStudentDTO';
import { IStudentRepository } from '../../interfaces/IStudentRepository';

@injectable()
class CreateStudentUseCase {
    constructor(
        @inject("StudentRepository")
        private studentRepository: IStudentRepository
    ) {}

    async execute (student: ICreateStudentDTO): Promise<void> {
        if(student.name === '' || student.age === 0 || student.course === '' || student.school === '') {
            throw new AppError('Student need to have Name, Age, Course and School to be registered');
        }
        
        const studentAlreadyExists = await this.studentRepository.findOneByName(student.name);
        
        if (studentAlreadyExists) {
            throw new AppError('Student already exists!');
        }
        
        await this.studentRepository.create(student);

    }
}

export { CreateStudentUseCase };