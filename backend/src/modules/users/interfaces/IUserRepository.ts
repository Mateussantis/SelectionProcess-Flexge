import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from '../infra/mongoose/entities/User';

interface IUserRepository {
    create(user: ICreateUserDTO): Promise<void>;
    findOneByEmail(email: string): Promise<ICreateUserDTO>;
    findOneById(_id: string): Promise<ICreateUserDTO>;
    listUsers(): Promise<Array<typeof User>>;
}

export { IUserRepository };