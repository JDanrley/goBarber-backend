import Appointment from '../models/Appointment';
import { Repository, EntityRepository } from 'typeorm';


@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>{
    
    public  async findByDate(date: Date): Promise<Appointment | null> {

        const findAppointment = await this.findOne({
            where: { date },
        })

        return findAppointment || null;
        // return this.appointments.find(appointment => isEqual(appointment.date, searchedDate)) || null;
    }
}

export default AppointmentsRepository;