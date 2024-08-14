"use client";

import Image from "next/image";
import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies";
import { useWindowSize } from "react-use";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });
  const maxiumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxiumScale * 1.1, maxiumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  return (
    <div className="bg-background pb-8">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky h-screen top-0 flex items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{ scale: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <Image
                src={movies[0].poster}
                alt={movies[0].name}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </motion.div>
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
            <motion.div
              style={{ scale: postersOpacity, x: posterTranslateXRight }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <Image
                src={movies[2].poster}
                alt={movies[2].name}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </motion.div>
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
