import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsNotEmpty()
  _id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  @Matches(/^(19|20)\d{2}$/, { message: 'Please enter a valid year' })
  releaseYear?: string;

  @IsOptional()
  @IsArray()
  streamingServices?: string[];

  @IsOptional()
  @IsString()
  posterUrl?: string;

  @IsOptional()
  @IsArray()
  genres?: string[];
}
