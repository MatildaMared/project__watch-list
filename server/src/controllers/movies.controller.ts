import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movie } from 'src/interface/movie.interface';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/dto/update-movie.dto';
import { MoviesService } from 'src/service/movies.service';

@Controller('/users/:userId/movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  // Get all movies for a user
  @Get()
  async getAll(): Promise<Movie[]> {
    return this.moviesService.getAll();
  }

  // Get a single movie that belongs to a user
  @Get(':movieId')
  async getOne(@Param('movieId') movieId: string): Promise<Movie> {
    return this.moviesService.getOne(movieId);
  }

  // Creates a new movie
  @Post()
  async create(@Body() movieData: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(movieData);
  }

  // Update a movie
  @Put(':movieId')
  async update(
    @Body() movieData: UpdateMovieDto,
    @Param('movieId') movieId: string,
  ): Promise<Movie> {
    return this.moviesService.update(movieId, movieData);
  }

  // Delete a movie
  @Delete(':movieId')
  async remove(@Param('movieId') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }
}
