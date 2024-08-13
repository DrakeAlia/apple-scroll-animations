import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div className="flex gap-5 mb-5 overflow-clip">
        <div className="w-[60vw] shrink-0 rounded-2xl overflow-clip">
          <Image
            src={movies[0].poster}
            alt={movies[0].name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[60vw] shrink-0 rounded-2xl overflow-clip">
          <Image
            src={movies[1].poster}
            alt={movies[1].name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[60vw] shrink-0 rounded-2xl overflow-clip">
          <Image
            src={movies[2].poster}
            alt={movies[2].name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <SmallVideoCarousel movies={randomMoviesSet1} />
      <SmallVideoCarousel movies={randomMoviesSet2} />
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {movies.map((movie, index) => (
        // <img key={`${movie.name} -${index}`} src={movie.poster} alt={movie.name} />
        <div className="w-[23vw] shrink-0" key={`${movie.name} -${index}`}>
          <Image
            src={movie.poster}
            alt={movie.name}
            width={1920}
            height={1080}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
