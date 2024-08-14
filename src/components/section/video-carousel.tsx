"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies";

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 2.5, 1]);

  return (
    <div className="bg-background pb-8">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky h-screen top-0 flex items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
              <Image
                src={movies[0].poster}
                alt={movies[0].name}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              style={{ scale }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <Image
                src={movies[1].poster}
                alt={movies[1].name}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
              <Image
                src={movies[2].poster}
                alt={movies[2].name}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--duration:74s] [--carousel-offset:-32px]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move relative flex gap-3 left-[var(--carousel-offset, 0px)]">
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[23vw] shrink-0"
            key={`${movie.name} -${index}`}
          >
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
    </div>
  );
};

export default VideoCarousel;
