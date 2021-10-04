import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HomeworkService } from './homework.service';
import { Homework } from './entities/homework.entity';
import { CreateHomeworkInput } from './dto/create-homework.input';
import { UpdateHomeworkInput } from './dto/update-homework.input';

@Resolver(() => Homework)
export class HomeworkResolver {
  constructor(private readonly homeworkService: HomeworkService) {}

  @Mutation(() => Homework)
  createHomework(@Args('createHomeworkInput') createHomeworkInput: CreateHomeworkInput) {
    return this.homeworkService.create(createHomeworkInput);
  }

  @Query(() => [Homework], { name: 'homework' })
  findAll() {
    return this.homeworkService.findAll();
  }

  @Query(() => Homework, { name: 'homework' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.homeworkService.findOne(id);
  }

  @Mutation(() => Homework)
  updateHomework(@Args('updateHomeworkInput') updateHomeworkInput: UpdateHomeworkInput) {
    return this.homeworkService.update(updateHomeworkInput.id, updateHomeworkInput);
  }

  @Mutation(() => Homework)
  removeHomework(@Args('id', { type: () => Int }) id: number) {
    return this.homeworkService.remove(id);
  }
}
