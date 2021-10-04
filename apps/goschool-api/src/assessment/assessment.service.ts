import { Injectable } from '@nestjs/common';
import { CreateAssessmentInput } from './dto/create-assessment.input';
import { UpdateAssessmentInput } from './dto/update-assessment.input';

@Injectable()
export class AssessmentService {
  create(createAssessmentInput: CreateAssessmentInput) {
    return 'This action adds a new assessment';
  }

  findAll() {
    return `This action returns all assessment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assessment`;
  }

  update(id: number, updateAssessmentInput: UpdateAssessmentInput) {
    return `This action updates a #${id} assessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessment`;
  }
}
