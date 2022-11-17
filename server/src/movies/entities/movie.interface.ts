export interface Movie {
  id: string;
  title: string;
  releaseYear: number;
  genres?: string[];
  posterUrl?: string;
  streamingServices?: string[];
}
