import { Injectable } from '@nestjs/common';
import { CreateTimeTableBlockInput } from './dto/create-time-table-block.input';
import { UpdateTimeTableBlockInput } from './dto/update-time-table-block.input';

@Injectable()
export class TimeTableBlockService {
  create(createTimeTableBlockInput: CreateTimeTableBlockInput) {
    return 'This action adds a new timeTableBlock';
  }

  findAll() {
    return `This action returns all timeTableBlock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeTableBlock`;
  }

  update(id: number, updateTimeTableBlockInput: UpdateTimeTableBlockInput) {
    return `This action updates a #${id} timeTableBlock`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeTableBlock`;
  }
}
