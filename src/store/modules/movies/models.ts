export type Movie = {
  id: number;
  title: string;
  poster: string;
  video: string;
};

export type MovieState = {
  list: Movie[];
};
