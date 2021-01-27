import Appointment from '../models/Appointment';
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
    provider_id: string;
    date: Date;
}

class CreateAppointmentService {
    
    public async execute ({provider_id, date}: RequestDTO): Promise<Appointment> {

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentHour = startOfHour(date);

        const isThisHourUsed = await appointmentsRepository.findByDate(appointmentHour);
    
        if (isThisHourUsed){
            throw Error('Hour already filled');
        };
        
        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentHour
        });

        await appointmentsRepository.save(appointment);
        
        return appointment;
    }
}

export default CreateAppointmentService;