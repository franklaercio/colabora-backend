import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async getById(id: string): Promise<User> {
    return await this.userModel.findById({ id: id });
  }

  async findByEmailAndPassword(email: string, password: string): Promise<User> {
    return await this.userModel.findByEmailAndPassword({ email, password });
  }
}
