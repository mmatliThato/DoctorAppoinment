import { Test, TestingModule } from '@nestjs/testing';
import { AuthpController } from './authp.controller';

describe('AuthpController', () => {
  let controller: AuthpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthpController],
    }).compile();

    controller = module.get<AuthpController>(AuthpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
