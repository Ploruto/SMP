import { Test, TestingModule } from '@nestjs/testing';
import { TimeTableBlockResolver } from './time-table-block.resolver';
import { TimeTableBlockService } from './time-table-block.service';

describe('TimeTableBlockResolver', () => {
  let resolver: TimeTableBlockResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeTableBlockResolver, TimeTableBlockService],
    }).compile();

    resolver = module.get<TimeTableBlockResolver>(TimeTableBlockResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
