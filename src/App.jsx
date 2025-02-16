import { useState, useEffect } from "react";
import axios from "axios";
import Result from "./components/Result";

export default function MovieSearchApp() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_APP_API}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
    }
  };

  useEffect(() => {
    if (search) {
      fetchMovies(search);
    }
  }, [search]);

  return (
    <div className="max-w-[100vw] shadow-2xl min-h-[100vh] mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-[1225px] bg-white/10 p-4 rounded-lg shadow-lg mb-6 mx-auto">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-cyan-400 rounded-lg text-gray-200 bg-gray-900 p-4 outline-none focus:ring-4 focus:ring-cyan-500 transition-all duration-300 placeholder-gray-400"
          placeholder="Search for a movie..."
        />
      </div>
      {movies.length === 0 ? (
        // no white space, tab etc
        (search.trim() === "") ? (
          <div className="text-3xl text-center mt-6 text-white-500">Enter a Movie Name</div>
        ) : (
          <div className="text-3xl text-center mt-6 animate-pulse text-cyan-400">Loading...</div>
        )
      ) : (
        <Result movies={movies} />
      )}

    </div>


    // <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
    //       <input
    //         type="search"
    //         value={search}
    //         onChange={(e) => setSearch(e.target.value)}
    //         className="w-full border border-black rounded text-slate-700 p-4"
    //         placeholder="Search for a movie..."
    //       />
    //       {movies.length === 0 ? (
    //         <div className="text-3xl text-center mt-2">Loading...</div>
    //       ) : (
    //         <Result movies={movies} />
    //       )}
    //     </div>


  );
}
