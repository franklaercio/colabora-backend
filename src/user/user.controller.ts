import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  HttpStatus,
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

    if (user) {
      return {
        status: HttpStatus.OK,
        message: 'User retrieve with success', 
        data: {
          id: user.id,
          name: user.name,
          created_at: user.createdAt
        }
      };
    } else {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: UserEntity })
  async login(@Body('email') email: string, @Body('password') password: string) {
    const user = await this.userService.login(email, password);

    if (user) {
      return {
        status: HttpStatus.OK,
        message: 'Login successful',
        data: {
          id: user.id,
          name: user.name,
        },
      };
    } else {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Invalid credentials',
      };
    }
  }
}
