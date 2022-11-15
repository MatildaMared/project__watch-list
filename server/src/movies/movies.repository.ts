import { IRepository } from 'src/abstracts/abstract.repository';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.interface';

export class MovieRepository implements IRepository<Movie> {
  private _repository: Model<Movie>;
  private _populateOnFind: string[];

  constructor(repository: Model<Movie>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<Movie[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<Movie> {
    return this._repository.findById(id).populate(this._populateOnFind).exec();
  }

  create(item: Movie): Promise<Movie> {
    return this._repository.create(item);
  }

  update(id: string, item: Movie) {
    return this._repository.findByIdAndUpdate(id, item);
  }
}
