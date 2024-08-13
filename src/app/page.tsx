import "@/styles/globals.css";
import Button from "@/components/button";
import Header from "../components/header";
import Container from "@/components/container";
import Hero from "@/components/section/hero";
import { Usps } from "@/components/section/usps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        {/* <div>
          <Container>3 cols layout</Container>
        </div> */}
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}
