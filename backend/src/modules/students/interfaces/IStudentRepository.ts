import { ICreateStudentDTO } from "../dtos/ICreateStudentDTO";
import { IStudent } from "../dtos/IStudentDTO";
import { Student } from '../infra/mongoose/entities/Student';

interface IStudentRepository {
    create(student: ICreateStudentDTO): Promise<void>;
    findOneByName(name: string): Promise<IStudent>;
    findOneById(_id: string): Promise<IStudent>;
    listStudents(): Promise<Array<typeof Student>>;
    updateOneUser(student: IStudent, newName: string): Promise<void>;
    deleteOneStudent(_id: string): Promise<void>;
    consultByName(name: string): Promise<Array<typeof Student>>;
    paginate(page: number): Promise<Array<typeof Student>>;
    countPages(): Promise<Number>;
}

export { IStudentRepository };