import { Injectable } from '@nestjs/common';
export type User = any
@Injectable()
export class UsersService {
    
    private readonly users = [
        {
            userId:1,
            username:'john',
            password: "changeme",
            roles: ["soldier"]
        },
        {
            userId:2,
            username:'maria',
            password: "guess",
            roles: ["commander"]
        },
    ]
    sayHi(): string {
        return 'Hi netanel moched Users'
    }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
