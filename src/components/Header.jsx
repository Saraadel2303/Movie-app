import React from 'react'
import MovieForm from './MovieForm'

export default function Header({ onAdd, movies = [], rating = 0 }) {
  return (
    <div className="flex justify-between items-center px-10 py-6 bg-purple-950 text-white">
      <div className="flex gap-10 text-lg">
        <p>Total Movies: <span className="font-bold">{movies.length}</span></p>
        <p>Average Rating: <span className="font-bold">{rating}</span></p>
      </div>

      <button
        className="bg-purple-800 hover:bg-purple-900 px-4 py-2 rounded cursor-pointer"
        onClick={onAdd}
      >
        Add Movie
      </button>
    </div>
  );
}
