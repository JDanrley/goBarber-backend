import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router(); 

usersRouter.post('/', async (request, response) => {

    try {

        const { name, email, password } = request.body;

        const usersService = new CreateUserService();

        const user = await usersService.execute({
            name,
            email,
            password
        });

        const userWithPasswordRemoved = {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at
        }

        return response.status(201).json(userWithPasswordRemoved);

    } catch (error){
        return response.status(400).json({
            message: error.message
        })
    }
});

export default usersRouter;