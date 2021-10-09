import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentResolver } from './assessment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from './entities/assessment.entity';
import { ClassGroup } from '../class-group/entities/class-group.entity';
import { Subject } from '../subject/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assessment, Subject, ClassGroup])],
  providers: [AssessmentResolver, AssessmentService],
})
export class AssessmentModule {}
