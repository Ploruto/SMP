import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { ClassGroup } from '../class-group/entities/class-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, ClassGroup])],
  providers: [StudentResolver, StudentService]
})
export class StudentModule {}
