import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Matches(/^(19|20)\d{2}$/, { message: 'Please enter a valid year' })
  releaseYear: string;

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
