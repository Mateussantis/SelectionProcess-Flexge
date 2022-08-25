import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            email,
            password
        } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const user = {
            email,
            password
        };

        await createUserUseCase.execute(user);

        return res.status(201).json({ msg: 'The User was registered !'});
    }
}

export { CreateUserController };
