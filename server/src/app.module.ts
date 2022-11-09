import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesController } from './controllers/movies.controller';
import { AppService } from './app.service';
import { MoviesService } from './service/movies.service';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
