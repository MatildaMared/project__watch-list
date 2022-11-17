import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movie } from './entities/movie.interface';
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/movies/dto/update-movie.dto';
import { MoviesService } from 'src/movies/movies.service';
import { MovieParams } from './params/params.movie';

@Controller('/api/movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  // Get a single movie
  @Get(':id')
  async get(@Param() { id }: MovieParams): Promise<Movie> {
    console.log('Hello');
    console.log(id);
    return this.moviesService.get(id);
  }

  // Creates a new movie
  @Post()
  async create(@Body() movieData: CreateMovieDto): Promise<Movie> {
    console.log('Inside controller: create movie');
    return this.moviesService.create(movieData);
  }

  // Update a movie
  @Put(':id')
  async update(
    @Body() movieData: UpdateMovieDto,
    @Param() { id }: MovieParams,
  ): Promise<Movie> {
    console.log('Inside controller: update movie');
    return this.moviesService.update(id, movieData);
  }

  // Delete a movie
  @Delete(':id')
  async delete(@Param() { id }: MovieParams) {
    console.log('Inside controller: delete movie');
    return this.moviesService.delete(id);
  }
}
