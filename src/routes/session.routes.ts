import { Router } from 'express';
import AuthenticateService from '../services/AuthenticateService';


const sessionRouter = Router(); 

sessionRouter.post('/', async (request, response) => {

    try {

        const { email, password } = request.body;
        const authenticateUserService = new AuthenticateService();
        const { user, token } = await authenticateUserService.execute({
            email,
            password
        });

        const userWithoutPassword = {
            name: user.name,
            email: user.email,
            id: user.id,
            token
        }

        response.json({ userWithoutPassword });

    } catch (err) {    
        return response.status(400).json(
            { error: err.message }
        )
    }
});

export default sessionRouter;