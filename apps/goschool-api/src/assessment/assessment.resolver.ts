import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssessmentService } from './assessment.service';
import { Assessment } from './entities/assessment.entity';
import { CreateAssessmentInput } from './dto/create-assessment.input';
import { UpdateAssessmentInput } from './dto/update-assessment.input';

@Resolver(() => Assessment)
export class AssessmentResolver {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Mutation(() => Assessment)
  createAssessment(@Args('createAssessmentInput') createAssessmentInput: CreateAssessmentInput) {
    return this.assessmentService.create(createAssessmentInput);
  }

  @Query(() => [Assessment], { name: 'assessment' })
  findAll() {
    return this.assessmentService.findAll();
  }

  @Query(() => Assessment, { name: 'assessment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assessmentService.findOne(id);
  }

  @Mutation(() => Assessment)
  updateAssessment(@Args('updateAssessmentInput') updateAssessmentInput: UpdateAssessmentInput) {
    return this.assessmentService.update(updateAssessmentInput.id, updateAssessmentInput);
  }

  @Mutation(() => Assessment)
  removeAssessment(@Args('id', { type: () => Int }) id: number) {
    return this.assessmentService.remove(id);
  }
}
