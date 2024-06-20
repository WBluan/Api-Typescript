import AppDataSource from '../data-source';
import { Usuario } from '../entities/Usuario';

interface IUser {
    id: string;
    nome: string,
    email: string
}

class CreateUserService{
    async execute({ id, nome, email }: IUser ){

        const usuario = await AppDataSource
            .getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                { 
                    id: id,
                    nome: nome,
                    email: email
                }
            ])
            .execute();
        
        console.log(Usuario)
        return usuario
    }
}

export { CreateUserService }