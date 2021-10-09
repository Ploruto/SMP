import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AssessmentModule } from '../assessment/assessment.module';
import { Assessment } from '../assessment/entities/assessment.entity';
import { BlogModule } from '../blog/blog.module';
import { Blog } from '../blog/entities/blog.entity';
import { ClassGroupModule } from '../class-group/class-group.module';
import { ClassGroup } from '../class-group/entities/class-group.entity';
import { GradeType } from '../grade-type/entities/grade-type.entity';
import { GradeTypeModule } from '../grade-type/grade-type.module';
import { Grade } from '../grade/entities/grade.entity';
import { GradeModule } from '../grade/grade.module';
import { Homework } from '../homework/entities/homework.entity';
import { HomeworkModule } from '../homework/homework.module';
import { School } from '../school/entities/school.entity';
import { SchoolModule } from '../school/school.module';
import { Student } from '../student/entities/student.entity';
import { StudentModule } from '../student/student.module';
import { Subject } from '../subject/entities/subject.entity';
import { SubjectModule } from '../subject/subject.module';
import { Teacher } from '../teacher/entities/teacher.entity';
import { TeacherModule } from '../teacher/teacher.module';
import { TimeTableBlock } from '../time-table-block/entities/time-table-block.entity';
import { TimeTableBlockModule } from '../time-table-block/time-table-block.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AssessmentModule,
    SchoolModule,
    BlogModule,
    ClassGroupModule,
    GradeModule,
    GradeTypeModule,
    HomeworkModule,
    StudentModule,
    SubjectModule,
    TeacherModule,
    TimeTableBlockModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [
        'dist/**/*.entity{.ts,.js}',
        Assessment,
        Blog,
        ClassGroup,
        Grade,
        School,
        GradeType,
        Homework,
        Student,
        Subject,
        Teacher,
        TimeTableBlock,
      ],
      synchronize: true,
      database: 'graphql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
