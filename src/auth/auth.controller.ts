import { Controller, Get, Body, Post, HttpCode, HttpStatus, Request, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";
import { Roles } from '../roles/roles.decoretor';
import { Role } from '../roles/role.enum';
import { type Response } from 'express';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    sayHi() {
        return this.authService.sayHi()
    }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    // @Roles(Role.Admin)

    async singin(@Body() signInDto: Record<string, any>, @Res() res: Response) {

        const { access_token } = await this.authService.singIn(signInDto.username, signInDto.password)
        res.header({ "access_token": access_token })
        res.json("login success")
    }
    @UseGuards(AuthGuard, RolesGuard)
    @Get('profile')
    @Roles(Role.Admin)
    getProfile(@Request() req) {
        return req.user
    }
}
