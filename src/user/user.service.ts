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

  async getById(id: string): Promise<User | null> {
    const user = await this.userModel.findById({ _id: id }).exec();
    return user;
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email, password }).exec();
    return user;
  }
}
