import { Injectable } from '@nestjs/common';
import { AuthPayLoadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtservice: JwtService) {

    }
    async validateUser({ username, password }: AuthPayLoadDto) {
        const findUser = await this.userModel.findOne({ username });
        if (!findUser) return null;
        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (isPasswordValid) {
            const { password, ...user } = findUser.toObject();
            return this.jwtservice.sign(user);
        }
    }
}
