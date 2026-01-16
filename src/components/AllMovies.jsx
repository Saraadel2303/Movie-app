import MovieCard from "./MovieCard";

export default function AllMovies({ movies, onEdit, onDelete, onRatingChange }) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onEdit={onEdit}
            onDelete={onDelete}
            onRatingChange={onRatingChange}
          />
        ))}
      </div>
    </div>
  );
}
