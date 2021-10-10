import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from 'typeorm/persistence/Subject';
import { CreateTeacherInput } from './dto/create-teacher.input';
import { UpdateTeacherInput } from './dto/update-teacher.input';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>
  ) {}

  async create(createTeacherInput: CreateTeacherInput): Promise<Teacher> {
    const teacher = await this.teacherRepo.create(createTeacherInput);
    const subjects = createTeacherInput.subject_ids.map(
      async (val) => await this.subjectRepo.findOneOrFail(val)
    );
    const awaitedSubjects = await Promise.all(subjects);
    console.log(awaitedSubjects);

    //teacher.subjects = awaitedSubjects;
    return await this.teacherRepo.save(teacher);
  }

  async findAll() {
    return await this.teacherRepo.find();
  }

  async findOne(id: number) {
    return await this.teacherRepo.findOneOrFail({ id });
  }

  async update(id: number, updateTeacherInput: UpdateTeacherInput) {
    await this.teacherRepo.update({ id }, updateTeacherInput);
    return await this.teacherRepo.findOneOrFail({ id });
  }

  async remove(id: number) {
    const teacher = await this.teacherRepo.findOneOrFail({ id });
    return await this.teacherRepo.remove(teacher);
  }
}
