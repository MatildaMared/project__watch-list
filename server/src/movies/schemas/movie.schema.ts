import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  releaseYear: string;

  @Prop()
  posterUrl?: string;

  @Prop()
  genres?: string[];

  @Prop()
  streamingServices?: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
