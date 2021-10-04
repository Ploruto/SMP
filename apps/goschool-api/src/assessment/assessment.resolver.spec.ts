import { Test, TestingModule } from '@nestjs/testing';
import { AssessmentResolver } from './assessment.resolver';
import { AssessmentService } from './assessment.service';

describe('AssessmentResolver', () => {
  let resolver: AssessmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssessmentResolver, AssessmentService],
    }).compile();

    resolver = module.get<AssessmentResolver>(AssessmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
