import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MovieDocument = Movie & Document;

@Schema({
  versionKey: false,
})
export class Movie {
  @Prop()
  id: string;

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
