import { Model } from 'mongoose';
import { User } from "../entities/User";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../../interfaces/IUserRepository";


class UserRepository implements IUserRepository {
    private repository: Model<Object>;
    
    constructor() {
        this.repository = User;
    }

    async create(User: ICreateUserDTO): Promise<void> {
        this.repository.create(User);
    }

    async listUsers(): Promise<Array<typeof User>> {
        return await this.repository.find();
    }

    async findOneByEmail(email: string): Promise<ICreateUserDTO> {
        return await this.repository.findOne({ email });
    }

    async findOneById(_id: string): Promise<ICreateUserDTO> {
        return await this.repository.findById(_id);
    }

}

export { UserRepository };