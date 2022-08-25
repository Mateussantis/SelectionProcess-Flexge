import { Model } from 'mongoose';
import { Student } from "../entities/Student";
import { ICreateStudentDTO } from "../../../dtos/ICreateStudentDTO";
import { IStudentRepository } from "../../../interfaces/IStudentRepository";
import { IStudent } from '../../../dtos/IStudentDTO';


class StudentRepository implements IStudentRepository {
    private repository: Model<Object>;
    
    constructor() {
        this.repository = Student;
    }

    async create(student: ICreateStudentDTO): Promise<void> {
        this.repository.create(student);
    }

    async findOneByName(name: string): Promise<IStudent> {
        return await this.repository.findOne({ name });
    }

    async findOneById(_id: string): Promise<IStudent> {
        return await this.repository.findById({_id});
    }

    async listStudents(): Promise<Array<typeof Student>> {
        return await this.repository.find();
    }

    async updateOneUser(student: IStudent, _id: string): Promise<void> {
        await this.repository.updateOne({ _id }, student);
    }

    async deleteOneStudent(_id: string): Promise<void> {
        await this.repository.deleteOne({ _id });
    }

    async consultByName(name: string): Promise<Array<typeof Student>> {
        return await this.repository.aggregate([
            { $match: { name: name }},
        ]);
    }

    async paginate(page: number): Promise<Array<typeof Student>> {
        let s = 0;
        let l = 10;
        if (page !== 0) {
            s = s + l * page;
        }

        return await this.repository.aggregate([
            { $sort: { name: 1 } },
            { $skip: s },
            { $limit: l},
        ]);
    }

    async countPages(): Promise<Number> {
        return Math.ceil(Number(await this.repository.count() / 10));
    }
}

export { StudentRepository };