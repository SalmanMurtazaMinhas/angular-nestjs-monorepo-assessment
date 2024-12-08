import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { UsersService } from "./users.service";
import { CreateUserDto } from "./CreateUser.dto";

@Controller()
export class UserController {
    constructor(private usersService: UsersService) {}

    @Post('signup')
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }
}