import { useState } from "react";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";

export default function MovieCard({ movie, onEdit, onDelete, onRatingChange }) {
  const [rating, setRating] = useState(movie.rating || 0);

  const handleStarClick = (starNumber) => {
    setRating(starNumber);
    onRatingChange(movie.id, starNumber);
  };

  return (
    <div className="bg-purple-950 text-white rounded-md shadow-md w-64 group overflow-hidden">
      <div className="relative">
        <img src={movie.image} alt={movie.name} className="w-full h-72 object-cover" />
        <div className="absolute top-2 right-2 bg-yellow-400 text-purple-950 font-bold text-sm px-2 py-1 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
          <FaStar /> {rating}
        </div>
      </div>

      <div className="p-3 flex flex-col justify-between h-60">
        <div>
          <h3 className="font-semibold">{movie.name}</h3>
          <div className="flex gap-1 mt-1">
            {movie.genres.map((g, i) => (
              <span key={i} className="text-xs bg-purple-600 px-2 py-1 rounded">{g}</span>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-2">{movie.description}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => {
              const starNum = i + 1;
              return (
                <FaStar
                  key={i}
                  className={`cursor-pointer text-yellow-400 ${starNum <= rating ? "fill-current" : "opacity-40"}`}
                  onClick={() => handleStarClick(starNum)}
                />
              );
            })}
          </div>
          <span className="text-xs text-gray-300 ml-2">Rating: ({rating}/5)</span>
        </div>

        <div className="flex justify-end gap-2 mt-4 opacity-0 group-hover:opacity-100 transition">
          <button onClick={() => onEdit(movie)} className="bg-purple-700 hover:bg-purple-600 px-3 py-1 rounded text-xs cursor-pointer">
            <FaEdit />
          </button>
          <button
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete "${movie.name}"?`)) {
                onDelete(movie.id);
              }
            }}
            className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded text-xs cursor-pointer"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
