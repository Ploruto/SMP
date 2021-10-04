import { Module } from '@nestjs/common';
import { TimeTableBlockService } from './time-table-block.service';
import { TimeTableBlockResolver } from './time-table-block.resolver';

@Module({
  providers: [TimeTableBlockResolver, TimeTableBlockService]
})
export class TimeTableBlockModule {}
