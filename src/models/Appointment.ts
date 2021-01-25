import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('appointments')
export default class Appointment {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('timestamp with time zone')
    date: Date;
<<<<<<< HEAD

    @CreateDateColumn('timestamp')
    created_at: Date;

    @UpdateDateColumn('timestamp')
    updated_at: Date;
}
=======
}
>>>>>>> 4575ce04ad9c054b7cc03e50b4b6bc569588f6f7
