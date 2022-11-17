import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie as MovieModel } from './schemas/movie.schema';
import { Movie } from './entities/movie.interface';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { IMovieRepository } from './abstracts/abstract.movie.repository';

export class MovieRepository implements IMovieRepository<Movie> {
  private _repository: Model<Movie>;

  constructor(@InjectModel(MovieModel.name) repository: Model<Movie>) {
    this._repository = repository;
  }

  get(id: any): Promise<Movie> {
    console.log('Inside repository: get one movie');
    return this._repository.findById(id).exec();
  }

  async create(item: CreateMovieDto): Promise<Movie> {
    console.log('Inside repository: create movie');
    const newMovie = await this._repository.create(item);
    return newMovie;
  }

  update(id: string, item: UpdateMovieDto): Promise<Movie> {
    console.log('Inside repository: update movie');
    return this._repository.findByIdAndUpdate(id, item).exec();
  }
}
