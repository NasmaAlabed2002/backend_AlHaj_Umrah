import { Test, TestingModule } from '@nestjs/testing';
import { ProgramBusService } from './program-bus.service';

describe('ProgramBusService', () => {
  let service: ProgramBusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramBusService],
    }).compile();

    service = module.get<ProgramBusService>(ProgramBusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
