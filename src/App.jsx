import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import AllMovies from "./components/AllMovies";
import MovieForm from "./components/MovieForm";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMovie, setEditMovie] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/items")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  const openForm = (movie = null) => {
    setEditMovie(movie);
    setShowForm(true);
  };

  const closeForm = () => setShowForm(false);

  const saveMovie = (movie) => {
    if (movie.id) {
      axios
        .patch(`http://localhost:3001/items/${movie.id}`, movie)
        .then((res) => {
          setMovies((oldMovies) =>
            oldMovies.map((m) => (m.id === movie.id ? res.data : m))
          );
        });
    } else {
      axios.post("http://localhost:3001/items", movie).then((res) => {
        setMovies((oldMovies) => [...oldMovies, res.data]);
      });
    }
  };

  const changeRating = (id, newRating) => {
    setMovies((oldMovies) =>
      oldMovies.map((m) => (m.id === id ? { ...m, rating: newRating } : m))
    );
  };

  const deleteMovie = (id) => {
    axios.delete(`http://localhost:3001/items/${id}`).then(() => {
      setMovies((oldMovies) => oldMovies.filter((m) => m.id !== id));
    });
  };

  const averageRating =
    movies.length === 0
      ? 0
      : (
          movies.reduce((sum, m) => sum + (m.rating || 0), 0) / movies.length
        ).toFixed(1);

  return (
    <div className="bg-purple-950 min-h-screen">
      <Header onAdd={openForm} movies={movies} rating={averageRating} />

      <AllMovies
        movies={movies}
        onEdit={openForm}
        onRatingChange={changeRating}
        onDelete={deleteMovie}
      />

      {showForm && (
        <MovieForm movie={editMovie} onClose={closeForm} onSave={saveMovie} />
      )}
    </div>
  );
}
