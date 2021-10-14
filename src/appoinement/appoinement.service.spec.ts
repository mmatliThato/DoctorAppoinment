import { Test, TestingModule } from '@nestjs/testing';
import { AppoinementService } from './appoinement.service';

describe('AppoinementService', () => {
  let service: AppoinementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppoinementService],
    }).compile();

    service = module.get<AppoinementService>(AppoinementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
