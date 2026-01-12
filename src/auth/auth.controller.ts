import { Controller, Get, Body, Post, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    sayHi() {
        return this.authService.sayHi()
    }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    singin(@Body() signInDto: Record<string, any>) {
        return this.authService.singIn(signInDto.username, signInDto.password)
    }
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }



}
