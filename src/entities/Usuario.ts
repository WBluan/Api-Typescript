import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"; 

@Entity('usuarios')
class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;
}

export { Usuario };