import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/dto/users.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://salmanmurtazaminhas:htXaQiPBcFLC6cgV@assessmentcluster.d1euw.mongodb.net/?retryWrites=true&w=majority&appName=AssessmentCluster'
    ),
    UsersModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
