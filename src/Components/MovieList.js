
import MovieCard from "./MovieCard"

const MovieList = ({ movies, searchInput }) => {
  return (
    <div className="movie-list-container">
      <h2 className="title">Movie List:</h2>
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchInput.trim().toLowerCase())
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;