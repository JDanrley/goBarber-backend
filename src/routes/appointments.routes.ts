import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router(); 

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();
    return response.status(200).json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {

    try {
        const { provider, date } = request.body;

        const appointmentHour = parseISO(date);
        
        const appointmentService = new CreateAppointmentService();

        const appointment = await appointmentService.execute({ provider, date: appointmentHour });
    
        return response.status(201).json(appointment);

    } catch (error){
        return response.status(400).json({
            message: error.message
        })
    }
});

export default appointmentsRouter;