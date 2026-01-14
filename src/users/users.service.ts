import {  Injectable } from '@nestjs/common';
import { User } from 'src/users/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private usersRepository: typeof User
    ){}
    private readonly users: User[] = [
        
    ]
    sayHi(): string {
        return 'Hi netanel moched Users'
    }
    async findAll():Promise<User[]>{
        return this.usersRepository.findAll<User>()
    }


    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
    async getAll(): Promise<User[] | undefined> {
        return this.users
    }
    async findById(id): Promise<User | undefined> {
        const getById = this.users.find(user => user.id === id)
        return getById

    }
    // async deleteById(id): Promise<User | undefined> {
    //     const findId = this.users.findIndex(val=>val.userId === id)
    //     this.users.pop()
        
    // }

}
