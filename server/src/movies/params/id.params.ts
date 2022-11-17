import { IsMongoId, IsNotEmpty } from 'class-validator';

export class IdParams {
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
