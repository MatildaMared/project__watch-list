import {
  Injectable,
  NotFoundException,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/movies/dto/update-movie.dto';
import { Movie } from 'src/movies/entities/movie.interface';
import { MovieRepository } from './movies.repository';

@Injectable()
export class MoviesService implements OnApplicationBootstrap {
  constructor(private readonly movieRepository: MovieRepository) {}

  async getAll(): Promise<Movie[]> {
    console.log('Inside service: get all movies');
    return this.movieRepository.getAll();
  }

  async get(id: string): Promise<Movie> {
    try {
      console.log('Inside service: get one movie');
      console.log('id = ', id);
      const movie = await this.movieRepository.get(id);
      console.log('movie = ', movie);
      return movie;
    } catch (error) {
      throw new NotFoundException(`Movie with ID '${id}' not found`);
    }
  }

  delete(id: string): boolean {
    console.log('Inside service: delete movie');
    // this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDto) {
    console.log('Inside service: create movie');
    console.log('Movie data is: ', movieData);
    const newMovie = this.movieRepository.create(movieData);
    console.log('new movie is: ', newMovie);

    return newMovie;
  }

  update(id: string, updateData: UpdateMovieDto) {
    console.log('Inside service: update movie');
    // const movie = this.getOne(id);
    // this.deleteOne(id);
    const updatedMovie = {
      id: '1',
      releaseYear: '2021',
      title: 'Test',
      genres: [],
      ...updateData,
    };
    // this.movies.push(updatedMovie);
    return updatedMovie;
  }

  onApplicationBootstrap() {
    console.log('MoviesService initialized');
  }
}
