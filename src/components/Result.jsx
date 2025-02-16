
// import React from "react";

// const Result = ({ movies }) => {
//   return (
//     <div className="w-full grid md:grid-cols-4 gap-5">
//       {movies.map((movie, index) => (
//         <Box key={index} image={movie.Poster} title={movie.Title} rating={movie.imdbRating} />
//       ))}
//     </div>
//   );
// };

// const Box = ({ image, title, rating }) => {
//   return (
//     <div className="shadow min-h-[200px] mt-3 pb-1">
//       <img src={image} alt={title} className="w-full" />
//       <div className="flex justify-between px-2 items-center">
//         <span className="text-2xl">{title}</span>
//         <span className="text-xl text-yellow-500 font-bold">{rating || "N/A"}</span>
//       </div>
//     </div>
//   );
// };

// export default Result;


import React from "react";

const Result = ({ movies }) => {
  return (
    <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 gap-6">
      {movies.map((movie, index) => (
        <Box key={index} image={movie.Poster} title={movie.Title} rating={movie.imdbRating} />
      ))}
    </div>
  );
};

const Box = ({ image, title, rating }) => {
  return (
    <div className="bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-[300px] object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">⭐ {rating || "N/A"}</span>
          <button className="bg-cyan-500 text-white px-3 py-1 text-xs rounded-lg hover:bg-cyan-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
