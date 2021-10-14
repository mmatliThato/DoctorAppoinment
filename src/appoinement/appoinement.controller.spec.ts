import { Test, TestingModule } from '@nestjs/testing';
import { AppoinementController } from './appoinement.controller';

describe('AppoinementController', () => {
  let controller: AppoinementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppoinementController],
    }).compile();

    controller = module.get<AppoinementController>(AppoinementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
