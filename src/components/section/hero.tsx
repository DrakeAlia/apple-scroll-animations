import React from "react";
import { Button } from "../button";
import { Container } from "../container";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-background relative h-[300vh] text-white">
      <div className="absolute left-0 -top-[--header-height] h-[200vh] w-full ">
        {/* <img src="/images/napoleon.png" alt="Napoleon image" /> */}
        <Image
          src="/images/napoleon.png"
          alt="Napoleon image"
          width={1920}
          height={1080}
          className="sticky top-0 h-screen w-full object-cover"
        />
      </div>
      <Container className="relative z-10 flex min-h-[--hero-height] flex-col justify-end items-start pb-7">
        <h1 className="text-5xl font-bold mb-10">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button className="mb-16" size="large">
          Stream now
        </Button>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </Container>
    </div>
  );
};

export default Hero;
