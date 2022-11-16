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

  getAll(): Promise<Movie[]> {
    console.log('Inside repository: get all movies');
    // return this._repository.find().populate(this._populateOnFind).exec();
    return this._repository.find().exec();
  }

  get(id: any): Promise<Movie> {
    console.log('Inside repository: get one movie');
    return this._repository.findById(id).exec();
  }

  create(item: CreateMovieDto): Promise<Movie> {
    console.log('Inside repository: create movie');
    return this._repository.create(item);
  }

  update(id: string, item: UpdateMovieDto): Promise<Movie> {
    console.log('Inside repository: update movie');
    return this._repository.findByIdAndUpdate(id, item).exec();
  }
}
