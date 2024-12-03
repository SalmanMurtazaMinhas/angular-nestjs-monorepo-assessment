import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../models/user.models";
import { UsersService } from "./users.service";
import { UserController } from "./users.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        }])
    ],
    providers: [UsersService],
    controllers: [UserController]
})
export class UsersModule {}