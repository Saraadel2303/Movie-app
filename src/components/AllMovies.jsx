import React from 'react'
import MovieCard from './MovieCard'

export default function AllMovies() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  )
}
