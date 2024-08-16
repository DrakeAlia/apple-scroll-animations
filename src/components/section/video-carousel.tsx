"use client";

import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies";
import { useWindowSize } from "react-use";
import Button from "../button";

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

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
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
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex flex-col md:flex-row w-full items-center gap-4 md:gap-0 md:justify-between text-white text-lg p-5"
              >
                <p>Best video title ever</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ scale: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] md:aspect-video w-[300px] md:w-[60vw] shrink-0 overflow-clip rounded-2xl"
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

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc(100vh-(300px*(9/16)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)] pt-4 space-y-3"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move relative flex gap-3 left-[var(--carousel-offset, 0px)]">
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[40vw] md:w-[23vw] shrink-0"
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
