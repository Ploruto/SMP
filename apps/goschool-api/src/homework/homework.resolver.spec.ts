import { Test, TestingModule } from '@nestjs/testing';
import { HomeworkResolver } from './homework.resolver';
import { HomeworkService } from './homework.service';

describe('HomeworkResolver', () => {
  let resolver: HomeworkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeworkResolver, HomeworkService],
    }).compile();

    resolver = module.get<HomeworkResolver>(HomeworkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
