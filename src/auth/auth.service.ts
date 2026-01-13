import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async singIn(
        username: string,
        password: string
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(username)
        
        if (user?.password !== password) {
            throw new UnauthorizedException()
        }
        const payload = { sub: user.userId, username: user.username,role:user.role };
        return {

            access_token: await this.jwtService.signAsync(payload,{secret:process.env.SECRET_JWT})
        }
    }

    sayHi(): string {
        return 'Hello Netanel from moched Auth '
    }
}
