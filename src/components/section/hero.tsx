import React from "react";
import { Button } from "../button";
import { Container } from "../container";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-background relative h-[300vh] text-white">
      <div className="absolute left-0 top-0 w-full">
        {/* <img src="/images/napoleon.png" alt="Napoleon image" /> */}
        <Image
          src="/images/napoleon.png"
          alt="Napoleon image"
          width={1920}
          height={1080}
          // className="absolute top-0 left-0 w-full"
        />
      </div>
      <Container className="relative z-10 pb-7 flex min-h-[--hero-height] flex-col justify-end items-start">
        <h1 className="text-5xl font-bold mb-10">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button className="mb-16" size="large">
          Large button
        </Button>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </Container>
    </div>
  );
};

export default Hero;
