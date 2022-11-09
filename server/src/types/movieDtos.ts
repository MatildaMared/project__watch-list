export class CreateMovieDto {
  title: string;
  releaseYear: number;
  genres?: string[];
}

export class UpdateMovieDto {
  title?: string;
  releaseYear?: number;
  genres?: string[];
}
