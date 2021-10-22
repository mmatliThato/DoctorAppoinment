import { Test, TestingModule } from '@nestjs/testing';
import { AuthpService } from './authp.service';

describe('AuthpService', () => {
  let service: AuthpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthpService],
    }).compile();

    service = module.get<AuthpService>(AuthpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
