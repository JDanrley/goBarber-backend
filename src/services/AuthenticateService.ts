import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface RequestDTO {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
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

        const { secret, expiresIn } = authConfig.webToken;

        const token = sign({}, secret, {
            subject: foundUser.id,
            expiresIn,
        })

        return {
            user: foundUser,
            token,
        };

    }
}

export default AuthenticateService;