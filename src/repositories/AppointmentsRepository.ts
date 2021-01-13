import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor(){
        this.appointments = [];
    }
    
    public findByDate(searchedDate: Date): Appointment | null {
        return this.appointments.find(appointment => isEqual(appointment.date, searchedDate)) || null;
    }

    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        const newAppointment = new Appointment({ provider, date });

        this.appointments.push(newAppointment);

        return newAppointment;
    }

    public getAllAppointments(): Appointment[]{
        return this.appointments;
    }   
}

export default AppointmentsRepository;