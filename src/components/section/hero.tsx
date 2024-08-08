import React from "react";
import { Button } from "../button";
import { Container } from "../container";

export const Hero = () => {
  return (
    <div className="bg-background text-white h-[300vh]">
      <Container>
        <h1 className="text-5xl font-bold">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button size="large">Large button</Button>
        <p className="font-semibold">Watch on the 📺 app.</p>
      </Container>
    </div>
  );
};
