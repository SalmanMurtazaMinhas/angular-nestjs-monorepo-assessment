import { Injectable } from '@nestjs/common';
import { AuthPayLoadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {
        id: 1,
        username: 'ali',
        password: 'password123'
    },

    {
        id: 2,
        username: 'zainab',
        password: 'password123'
    },
]
@Injectable()
export class AuthService {

    constructor(private jwtservice: JwtService) {

    }
    validateUser({ username, password }: AuthPayLoadDto) {
        const findUser = fakeUsers.find((user) => user.username === username);
        if (!findUser) return null;
        if (password === findUser.password) {
            const{ password, ...user} = findUser;
            return this.jwtservice.sign(user);
        }
    }
}
