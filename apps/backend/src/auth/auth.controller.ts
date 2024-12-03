import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req: Request){
        return req.user;
    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request){
        return req.user;
    }
}
