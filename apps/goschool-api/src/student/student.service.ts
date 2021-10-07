import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassGroup } from '../class-group/entities/class-group.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>,
  @InjectRepository(ClassGroup) private classGroupRepository: Repository<ClassGroup>){}


  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const student = this.studentRepository.create(createStudentInput);
    const group = await this.classGroupRepository.findOne({name: createStudentInput.group_name});
    if(!group.students) group.students = [];
    group.students.push(student);
    await this.classGroupRepository.save(group);
    return await this.studentRepository.save(student);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: string) {
    return await this.studentRepository.findOneOrFail(id);
  }

  update(id: string, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
