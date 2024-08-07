import React from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast px-6 text-white">
        <Container className="flex items-center min-h-11">
          <a href="/" className="h-11 text-xl flex items-center px-6 -ml-6">
            🍏 <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast px-6 text-white">
        <Container className="flex justify-between items-center min-h-11">
          <p className="text-xl font-semibold">Apple TV+</p> 
          <Button size="small">Test</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
