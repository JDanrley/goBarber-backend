import Appointment from '../models/Appointment';
import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
    provider: string;
    date: Date;
}


class CreateAppointmentService {
    private appointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository){
        this.appointmentsRepository = appointmentsRepository;
    }
    
    public execute ({provider, date}: RequestDTO): Appointment {

        const parsedHour = startOfHour(date);

        const isThisHourUsed = this.appointmentsRepository.findByDate(parsedHour);
    
        if (isThisHourUsed){
            throw Error('Hour already filled');
        };
    
        this.appointmentsRepository.create({ 
            provider,
            date: parsedHour 
        });
        
        return new Appointment({ provider, date: parsedHour });
    }
}

export default CreateAppointmentService;