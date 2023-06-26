import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user-entity';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: UserEntity })
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return { 
      message: 'Usuário criado com sucesso', 
      data: {
        id: user.id,
        name: user.name,
        created_at: user.createdAt
      }
    };
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: UserEntity })
  async getById(@Param() params: any) {
    const user = await this.userService.getById(params.id);
    return { 
      message: 'Usuário criado com sucesso', 
      data: {
        id: user.id,
        name: user.name,
        created_at: user.createdAt
      }
    };
  }

  @Get('/login')
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: UserEntity })
  async login(@Param() params: any) {
    const user = await this.userService.findByEmailAndPassword(params.email, params.password);
    return { message: 'Login realizado com sucesso'};
  }
}
