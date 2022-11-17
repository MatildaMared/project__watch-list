export interface Movie {
  id: string;
  title: string;
  releaseYear: string;
  genres?: string[];
  posterUrl?: string;
  streamingServices?: string[];
}
