import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/movies/dto/update-movie.dto';
import { Movie } from 'src/movies/interfaces/movie.interface';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
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

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDto) {
    const newMovie = {
      id: Math.random().toString(),
      ...movieData,
    };

    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: string, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    const updatedMovie = { ...movie, ...updateData };
    this.movies.push(updatedMovie);
    return updatedMovie;
  }
}
