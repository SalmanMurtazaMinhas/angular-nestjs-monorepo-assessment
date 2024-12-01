import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
        secret: 'a1a1a1',
        signOptions: { expiresIn: '8h'}
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
