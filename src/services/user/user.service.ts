import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async createUser(name: string, email: string, age: number): Promise<User> {
    const user = new this.userModel({ name, email, age });
    return user.save();
  }
}
