import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentResolver } from './assessment.resolver';

@Module({
  providers: [AssessmentResolver, AssessmentService]
})
export class AssessmentModule {}
