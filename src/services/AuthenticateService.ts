import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';

interface RequestDTO {
    email: string;
    password: string;
}

interface Response {
    user: User;
}

class AuthenticateService {
    public async execute({ email, password }: RequestDTO): Promise<Response>{
        const authRepository = getRepository(User);

        const foundUser = await authRepository.findOne({
            where: { email }
        });

        if (!foundUser){
            throw new Error('The provided credentials were incorrect')
        }

        const doesPasswordMatch = await compare(password, foundUser.password);

        if (!doesPasswordMatch){
            throw new Error ('The provided credentials were incorrect');
        }

        return {
            user: foundUser,
        };

    }
}

export default AuthenticateService;