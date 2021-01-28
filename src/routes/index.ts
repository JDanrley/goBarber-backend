import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import sessionRouter from './session.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/session', sessionRouter)

export default routes;