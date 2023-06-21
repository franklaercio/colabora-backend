import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('App Controller', () => {
    it('should redirect to api docs', () => {
      const appController = app.get(AppController);
      expect(appController.getApi()).toHaveProperty('url');
    });
  });
});
