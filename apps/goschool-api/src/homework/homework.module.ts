import { Module } from '@nestjs/common';
import { HomeworkService } from './homework.service';
import { HomeworkResolver } from './homework.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Homework } from './entities/homework.entity';
import { ClassGroup } from '../class-group/entities/class-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Homework, ClassGroup])],
  providers: [HomeworkResolver, HomeworkService],
})
export class HomeworkModule {}
