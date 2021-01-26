import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    updated_at: Date;

    
}
