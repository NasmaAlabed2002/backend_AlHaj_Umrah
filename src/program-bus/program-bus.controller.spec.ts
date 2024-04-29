import { Test, TestingModule } from '@nestjs/testing';
import { ProgramBusController } from './program-bus.controller';
import { ProgramBusService } from './program-bus.service';

describe('ProgramBusController', () => {
  let controller: ProgramBusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramBusController],
      providers: [ProgramBusService],
    }).compile();

    controller = module.get<ProgramBusController>(ProgramBusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
