import { Controller, Body, Post, HttpException, UseGuards } from '@nestjs/common';
import { AuthPayLoadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Body() authPayLoad: AuthPayLoadDto) {
        const user = this.authService.validateUser(authPayLoad);
        if (!user) throw new HttpException('invalid Credentials', 401);
        return user;
    }
}
