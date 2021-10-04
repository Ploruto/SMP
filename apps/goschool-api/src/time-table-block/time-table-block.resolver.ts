import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimeTableBlockService } from './time-table-block.service';
import { TimeTableBlock } from './entities/time-table-block.entity';
import { CreateTimeTableBlockInput } from './dto/create-time-table-block.input';
import { UpdateTimeTableBlockInput } from './dto/update-time-table-block.input';

@Resolver(() => TimeTableBlock)
export class TimeTableBlockResolver {
  constructor(private readonly timeTableBlockService: TimeTableBlockService) {}

  @Mutation(() => TimeTableBlock)
  createTimeTableBlock(@Args('createTimeTableBlockInput') createTimeTableBlockInput: CreateTimeTableBlockInput) {
    return this.timeTableBlockService.create(createTimeTableBlockInput);
  }

  @Query(() => [TimeTableBlock], { name: 'timeTableBlock' })
  findAll() {
    return this.timeTableBlockService.findAll();
  }

  @Query(() => TimeTableBlock, { name: 'timeTableBlock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.timeTableBlockService.findOne(id);
  }

  @Mutation(() => TimeTableBlock)
  updateTimeTableBlock(@Args('updateTimeTableBlockInput') updateTimeTableBlockInput: UpdateTimeTableBlockInput) {
    return this.timeTableBlockService.update(updateTimeTableBlockInput.id, updateTimeTableBlockInput);
  }

  @Mutation(() => TimeTableBlock)
  removeTimeTableBlock(@Args('id', { type: () => Int }) id: number) {
    return this.timeTableBlockService.remove(id);
  }
}
