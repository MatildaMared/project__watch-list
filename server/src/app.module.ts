import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesController } from './controllers/movies.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService],
})
export class AppModule {}
