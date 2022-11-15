import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from 'src/repository/models/movie.model';
import { MongoDBGenericRepository } from 'src/repository/mongodb-generic-repository';

@Injectable()
export class DataService implements OnApplicationBootstrap {
  movies: MongoDBGenericRepository<Movie>;

  constructor(
    @InjectModel(Movie.name)
    private MovieRepository: Model<Movie>,
  ) {}

  onApplicationBootstrap() {
    this.movies = new MongoDBGenericRepository<Movie>(this.MovieRepository);
    // this.books = new MongoGenericRepository<Book>(this.BookRepository, [
    //   'author',
    //   'genre',
    // ]);
  }
}
