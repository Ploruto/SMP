import { Module } from '@nestjs/common';
import { HomeworkService } from './homework.service';
import { HomeworkResolver } from './homework.resolver';

@Module({
  providers: [HomeworkResolver, HomeworkService]
})
export class HomeworkModule {}
