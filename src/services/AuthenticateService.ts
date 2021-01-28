import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';

interface RequestDTO {
    email: string;
    password: string;
}

class AuthenticateService {
    public async execute({ email, password }: RequestDTO): Promise<void>{
        const authRepository = getRepository(User);
        const emailWasFound = authRepository.findOne({
            where: { email }
        });

        if (!emailWasFound){
            throw new Error('Email/password does not mached/were found')
        }

        
    }
}

export default AuthenticateService;