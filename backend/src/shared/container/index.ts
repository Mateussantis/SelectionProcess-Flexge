import { container } from "tsyringe";

import { StudentRepository } from '../../modules/students/infra/mongoose/repositories/StudentRepository';
import { IStudentRepository } from "../../modules/students/interfaces/IStudentRepository";
import { UserRepository } from '../../modules/users/infra/mongoose/repositories/UserRepository';
import { IUserRepository } from "../../modules/users/interfaces/IUserRepository";

container.registerSingleton<IStudentRepository>(
    'StudentRepository',
    StudentRepository
);

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository
);
