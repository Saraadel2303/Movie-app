import { useState, useEffect } from "react";

export default function MovieForm({ movie, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    genres: [],
    inTheaters: false,
  });

  useEffect(() => {
    setForm({
      name: movie?.name || "",
      image: movie?.image || "",
      description: movie?.description || "",
      genres: movie?.genres || [],
      inTheaters: movie?.inTheaters || false,
    });
  }, [movie]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenres = (e) => {
    const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setForm({ ...form, genres: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.image) {
      alert("Name and Image are required");
      return;
    }

    const movieData = movie?.id ? { ...movie, ...form } : { ...form };

    onSave(movieData);

    onClose();
  };

  const isEdit = !!movie?.id;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-purple-950 text-white p-6 rounded-xl w-105 shadow-xl"
      >
        <h2 className="text-xl font-bold text-center mb-6">
          {isEdit ? "Edit Movie" : "Add Movie"}
        </h2>

        <label className="block mb-1 text-sm text-purple-300">
          Movie Name *
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter movie name"
          required
          className="w-full p-2 mb-3 bg-purple-800 rounded outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label className="block mb-1 text-sm text-purple-300">
          Image URL *
        </label>
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Enter image url"
          required
          className="w-full p-2 mb-3 bg-purple-800 rounded outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label className="block mb-1 text-sm text-purple-300">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Write a short description..."
          rows={3}
          className="w-full p-2 mb-3 bg-purple-800 rounded resize-none outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label className="block mb-1 text-sm text-purple-300">Genres</label>
        <select
          multiple
          value={form.genres}
          onChange={handleGenres}
          className="w-full h-28 p-2 bg-purple-800 rounded cursor-pointer outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
        </select>

        <label className="flex items-center gap-2 mt-3 text-purple-300 cursor-pointer">
          <input
            type="checkbox"
            checked={form.inTheaters}
            onChange={(e) => setForm({ ...form, inTheaters: e.target.checked })}
            className="w-4 h-4 accent-purple-500"
          />
          in theaters
        </label>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded"
          >
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
