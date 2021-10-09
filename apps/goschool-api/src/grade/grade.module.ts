import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeResolver } from './grade.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { GradeType } from '../grade-type/entities/grade-type.entity';
import { Subject } from '../subject/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grade, GradeType, Subject])],
  providers: [GradeResolver, GradeService],
})
export class GradeModule {}
