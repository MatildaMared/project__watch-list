import { IsMongoId, IsNotEmpty } from 'class-validator';

export class MovieParams {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
