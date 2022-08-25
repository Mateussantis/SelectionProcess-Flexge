import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../interfaces/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findOneByEmail(email);

        if (!user) {
            throw new AppError("Email or Password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or Password incorrect!");
        }

        const token = sign({}, "criptografiaMateus", {
            subject: user._id.toString(),
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                email: user.email
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
