import { Model } from 'mongoose';
import { IRepository } from 'src/abstracts/abstract.repository';

export class MongoDBGenericRepository<T> implements IRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<T> {
    const query = this._repository.findById(id);
    if (this._populateOnFind.length > 0) {
      query.populate(this._populateOnFind);
    }
    return query.exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }
}
