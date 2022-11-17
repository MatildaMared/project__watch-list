import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.interface';

export abstract class IMovieRepository<T> {
  abstract get(id: string): Promise<Movie>;

  abstract create(item: CreateMovieDto): Promise<Movie>;

  abstract update(id: string, item: UpdateMovieDto): Promise<Movie>;
}
