import { Entity,Column,PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm"
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
 
    @Column({ unique: true })
    email: string

    @Column()
    phone: string

    @Column()
    password: string

}
