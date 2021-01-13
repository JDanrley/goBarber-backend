import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRepository = new AppointmentsRepository();
const appointmentsRouter = Router(); 

appointmentsRouter.get('/', (request, response) => {
    return response.status(200).json(appointmentsRepository.getAllAppointments());
});

appointmentsRouter.post('/', (request, response) => {

    try {
        const { provider, date } = request.body;

        const appointmentHour = parseISO(date);
        
        const appointmentService = new CreateAppointmentService(appointmentsRepository);
        
        const appointment = appointmentService.execute({ provider, date: appointmentHour });
    
        return response.status(201).json(appointment);

    } catch (error){
        return response.status(400).json({
            message: error.message
        })
    }
});

export default appointmentsRouter;