<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
=======
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
>>>>>>> 4575ce04ad9c054b7cc03e50b4b6bc569588f6f7
export default class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
<<<<<<< HEAD
    email: string;

    @Column()
    password: string;

    @CreateDateColumn('timestamp')
    created_at: Date;

    @UpdateDateColumn('timestamp')
    updated_at: Date;
}
=======
    password: string;

    @Column()
    email: string;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    updated_at: Date;

    
}
>>>>>>> 4575ce04ad9c054b7cc03e50b4b6bc569588f6f7
