import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    readonly id?: number;

    @Column('varchar', {length: 255, nullable: false, name: 'first_name'})
    readonly first_name: string;

    @Column('varchar', {length: 255, nullable: false, name: 'middle_name'})
    readonly middle_name?: string;
    
    @Column('varchar', {length: 255, nullable: false, name: 'last_name'})
    readonly last_name: string;

    @Column('varchar', {length: 255, nullable: false, name: 'email'})
    readonly email: string;

    @Column('varchar', {length: 255, nullable: false, name: 'password'})
    readonly password: string;

    

}