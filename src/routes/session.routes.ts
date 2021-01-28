import { Router } from 'express';

const sessionRouter = Router(); 

sessionRouter.post('/', async (request, response) => {

    try {

    } catch (err){
        return response.status(400).json({
            error: err.message
        })
    }
});

export default sessionRouter;