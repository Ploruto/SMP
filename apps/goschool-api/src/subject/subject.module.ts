import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../teacher/entities/teacher.entity';
import { Subject } from './entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Teacher])],
  providers: [SubjectResolver, SubjectService],
})
export class SubjectModule {}
