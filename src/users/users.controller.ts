import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { RolesGuard } from "../roles/roles.guard";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    sayHi() {
        return this.usersService.sayHi()
    }
}
