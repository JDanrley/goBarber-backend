import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload'
import ensureAuthentication from '../middlewares/ensureAuthenticated';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router(); 

const upload = multer(uploadConfig);

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

usersRouter.patch(
    '/avatar', 
    ensureAuthentication, 
    upload.single('avatar'),
    async (request, response) => {
    return response.json({
        message: "ok human"
    })
})

export default usersRouter;