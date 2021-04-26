export const getInitialValues = (movie = {}) => ({
  title: movie.title || '',
  releaseDate: movie.release_date || '',
  movieUrl: movie.poster_path || '',
  genre: movie.genres ? movie.genres[0] : '',
  overview: movie.overview || '',
  runtime: movie.runtime || '',
});

export const buildAddMovieInput = (values) => {
  const { title, releaseDate, movieUrl, genre, overview, runtime } = values;
  return {
    title,
    release_date: releaseDate,
    poster_path: movieUrl,
    genres: [genre],
    overview,
    runtime: runtime || 0,
  };
};
