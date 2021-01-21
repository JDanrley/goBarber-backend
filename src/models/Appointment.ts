import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
export default class Appointment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('timestamp with time zone')
    date: Date;
}

/* class Appointment {
    id: string;

    provider: string;   

    date: Date;

    constructor( { provider, date }: Omit<Appointment, 'id'>){
        this.id = v4();
        this.provider = provider;
        this.date = date;
    }

}

export default Appointment;

 */