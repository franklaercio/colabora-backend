import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const configMongodb = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
  return {
    uri: configService.get<string>('MONGODB_URL'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
};