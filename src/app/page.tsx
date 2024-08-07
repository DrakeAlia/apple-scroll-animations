import Header from "../components/header";
import Container from "@/components/container";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>
            Hero Component <Button size="large">Large button</Button>
          </Container>
        </div>
        <div>
          <Container>usps</Container>
        </div>
        <div>
          <Container>3 cols layout</Container>
        </div>
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}
