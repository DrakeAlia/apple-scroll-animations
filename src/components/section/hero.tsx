"use client";

import React, { useRef } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background relative text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full "
      >
        {/* <img src="/images/napoleon.png" alt="Napoleon image" /> */}
        <Image
          src="/images/napoleon.png"
          alt="Napoleon image"
          width={1920}
          height={1080}
          className="sticky top-0 h-screen w-full object-cover"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileHover="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="large">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
