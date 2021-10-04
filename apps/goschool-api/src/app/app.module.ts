import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ClassModule } from '../class/class.module';
import { Class } from '../class/entities/class.entity';
import { Student } from '../student/entities/student.entity';
import { StudentModule } from '../student/student.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    StudentModule,
    ClassModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port: 5432,
      username:"postgres",
      password:"postgres",
      entities: ["dist/**/*.entity{.ts,.js}", Student, Class],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
