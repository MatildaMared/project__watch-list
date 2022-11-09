import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movie } from 'src/types/Movie';
import { CreateMovieDto, UpdateMovieDto } from 'src/types/movieDtos';

@Controller('/users/:userId/movies')
export class MoviesController {
  // Get all movies for a user
  @Get()
  getAll(): Movie[] {
    return [
      {
        id: '1',
        title: 'The Shawshank Redemption',
        releaseYear: 1994,
        genres: ['Drama'],
      },
      {
        id: '2',
        title: 'The Godfather',
        releaseYear: 1972,
        genres: ['Crime', 'Drama'],
      },
    ];
  }

  // Get a single movie that belongs to a user
  @Get(':movieId')
  getOne(@Param('movieId') movieId: string): Movie {
    return {
      id: movieId,
      title: 'The Shawshank Redemption',
      releaseYear: 1994,
      genres: ['Drama'],
    };
  }

  // Creates a new movie
  @Post()
  create(@Body() movieData: CreateMovieDto): Movie {
    return {
      id: '1',
      ...movieData,
    };
  }

  // Update a movie
  @Put(':movieId')
  update(
    @Param('movieId') movieId: string,
    @Body() updateData: UpdateMovieDto,
  ) {
    return {
      id: movieId,
      ...updateData,
    };
  }

  // Delete a movie
  @Delete(':movieId')
  remove(@Param('movieId') movieId: string) {
    return {
      movieToBeRemoved: movieId,
    };
  }
}
