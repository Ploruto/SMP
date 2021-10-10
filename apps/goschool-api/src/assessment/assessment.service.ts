import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssessmentInput } from './dto/create-assessment.input';
import { UpdateAssessmentInput } from './dto/update-assessment.input';
import { Assessment } from './entities/assessment.entity';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectRepository(Assessment) private assessmentRepo: Repository<Assessment>
  ) {}

  async create(createAssessmentInput: CreateAssessmentInput) {
    const assessment = this.assessmentRepo.create(createAssessmentInput);
    return await this.assessmentRepo.save(assessment);
  }

  async findAll() {
    return await this.assessmentRepo.find();
  }

  async findOne(id: number) {
    return await this.assessmentRepo.findOneOrFail({ id });
  }

  async update(id: number, updateAssessmentInput: UpdateAssessmentInput) {
    this.assessmentRepo.update({ id }, updateAssessmentInput);
    return await this.assessmentRepo.findOneOrFail({ id });
  }

  async remove(id: number) {
    const assessment = await this.assessmentRepo.findOneOrFail({ id });
    return await this.assessmentRepo.remove(assessment);
  }
}
