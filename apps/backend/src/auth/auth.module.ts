import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategies';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/user.models';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
        secret: 'mynameisjeff',
        signOptions: { expiresIn: '8h'}
    }),

    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
  }])
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
