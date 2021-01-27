import { Router } from 'express';
import { parseISO } from 'date-fns';
// import CreateUserService from '../services/CreateUserService';

const usersRouter = Router(); 

usersRouter.post('/', async (request, response) => {

    try {
        return response.status(200).send();
    } catch (error){
        return response.status(400).json({
            message: error.message
        })
    }
});

export default usersRouter;