import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
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
      password:"graphql",
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
