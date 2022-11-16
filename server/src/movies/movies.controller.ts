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

@Controller('/api/movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  // Get all movies for a user
  @Get()
  async getAll(): Promise<Movie[]> {
    console.log('Inside controller: get all movies');
    return this.moviesService.getAll();
  }

  // Get a single movie that belongs to a user
  @Get(':movieId')
  async get(@Param('movieId') movieId: string): Promise<Movie> {
    return this.moviesService.get(movieId);
  }

  // Creates a new movie
  @Post()
  async create(@Body() movieData: CreateMovieDto): Promise<Movie> {
    console.log('Inside controller: create movie');
    return this.moviesService.create(movieData);
  }

  // Update a movie
  @Put(':movieId')
  async update(
    @Body() movieData: UpdateMovieDto,
    @Param('movieId') movieId: string,
  ): Promise<Movie> {
    console.log('Inside controller: update movie');
    return this.moviesService.update(movieId, movieData);
  }

  // Delete a movie
  @Delete(':movieId')
  async delete(@Param('movieId') movieId: string) {
    console.log('Inside controller: delete movie');
    return this.moviesService.delete(movieId);
  }
}
