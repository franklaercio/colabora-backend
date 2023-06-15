import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('age') age: number,
    ) {
        const user = await this.userService.createUser(name, email, age);
        return { message: 'Usuário criado com sucesso', user };
    }
}
