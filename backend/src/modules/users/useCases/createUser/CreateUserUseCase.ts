import { hash } from "bcryptjs";
import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../interfaces/IUserRepository';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute (user: ICreateUserDTO): Promise<void> {
        if (user.email === '') {
            throw new AppError('User need to have a Email!');
        }
        
        const userAlreadyExists = await this.userRepository.findOneByEmail(user.email);
        
        if (userAlreadyExists) {
            throw new AppError('User already exists!');
        }
        
        if (user.password === '') {
            throw new AppError('User need to have a Password!');
        }

        const passwordHash = await hash(user.password, 8);

        const userNew = {
            ...user,
            password: passwordHash
        }

        await this.userRepository.create(userNew);
    }
}

export { CreateUserUseCase };