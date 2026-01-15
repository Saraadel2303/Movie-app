import React from 'react'

function MovieForm() {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-purple-950 text-white p-5 rounded-md w-105">
        
        <h2 className="text-lg font-bold mb-4 text-center">
          Add Movie
        </h2>

        <div className="space-y-3">
          
          <input
            type="text"
            placeholder="Movie Name *"
            className="w-full p-2 rounded bg-purple-800 outline-none"
          />

          <textarea
            rows="3"
            placeholder="Description"
            className="w-full p-2 rounded bg-purple-800 outline-none resize-none"
          />

          <input
            type="text"
            placeholder="Image URL *"
            className="w-full p-2 rounded bg-purple-800 outline-none"
          />

          <select
            multiple
            className="w-full p-2 rounded bg-purple-800 h-24"
          >
            <option>Drama</option>
            <option>Action</option>
            <option>Crime</option>
          </select>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            In Theaters
          </label>
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded cursor-pointer">
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieForm;


