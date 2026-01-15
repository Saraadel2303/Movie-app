import { FaEdit, FaStar, FaTrash } from "react-icons/fa";

function MovieCard() {
  return (
    <div className="bg-purple-950 text-white rounded-md shadow-md w-64 group overflow-hidden">
      <img
        src="https://via.placeholder.com/260x350"
        alt="movie"
        className="w-full h-72 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-base font-semibold">The Movie Name</h3>

        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-purple-600 px-2 py-1 rounded">Drama</span>
          <span className="text-xs bg-purple-600 px-2 py-1 rounded">Crime</span>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2">
          Movie description goes here and it can be a bit longer than one line.
        </p>

        <div className="text-yellow-400 text-sm flex gap-1">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        </div>
        
        <div className="flex justify-end gap-2 mt-2 opacity-0 group-hover:opacity-100 transition">
          <button className="bg-purple-700 p-2 rounded hover:bg-purple-600 cursor-pointer">
            <FaEdit />
          </button>
          <button className="bg-red-700 p-2 rounded hover:bg-red-600 cursor-pointer">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

