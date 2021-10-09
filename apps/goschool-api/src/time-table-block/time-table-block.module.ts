import { Module } from '@nestjs/common';
import { TimeTableBlockService } from './time-table-block.service';
import { TimeTableBlockResolver } from './time-table-block.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassGroup } from '../class-group/entities/class-group.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { TimeTableBlock } from './entities/time-table-block.entity';
import { Subject } from '../subject/entities/subject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClassGroup, Teacher, Subject, TimeTableBlock]),
  ],
  providers: [TimeTableBlockResolver, TimeTableBlockService],
})
export class TimeTableBlockModule {}
