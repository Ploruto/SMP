import { Test, TestingModule } from '@nestjs/testing';
import { TimeTableBlockService } from './time-table-block.service';

describe('TimeTableBlockService', () => {
  let service: TimeTableBlockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeTableBlockService],
    }).compile();

    service = module.get<TimeTableBlockService>(TimeTableBlockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
