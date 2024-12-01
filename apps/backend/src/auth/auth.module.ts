import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategies';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
        secret: 'a1a1a1',
        signOptions: { expiresIn: '8h'}
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
