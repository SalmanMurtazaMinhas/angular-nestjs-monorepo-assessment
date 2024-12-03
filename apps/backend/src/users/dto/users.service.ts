import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../../models/user.models";
import { Model } from "mongoose";
import { CreateUserDto } from "./CreateUser.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const { password, ...rest } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({
            ...rest,
            password: hashedPassword,
        });
        return newUser.save()
    }
}