import User from '../models/User';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

interface RequestDTO{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: RequestDTO): Promise<User>{
        const usersRepository = getRepository(User); 
        const emailAlreadyRegistered = await usersRepository.findOne({
            where: { email } 
        })
        
        if (emailAlreadyRegistered){
            throw new Error('Email address already used');
        }

        const hashedPassword = await hash(password, 8);

        const newUser = usersRepository.create({
            name,
            email,
            password: hashedPassword
        })

        await usersRepository.save(newUser);
        return newUser;
    }
}

export default CreateUserService;