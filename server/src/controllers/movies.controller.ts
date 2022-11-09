import { Controller, Get } from '@nestjs/common';
import { Movie } from 'src/types/Movie';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): Movie {
    return {
      id: '1',
      title: 'The Shawshank Redemption',
      releaseYear: 1994,
      genres: ['Drama'],
    };
  }
}
