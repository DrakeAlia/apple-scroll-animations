import Header from "../components/header";
import Container from "@/components/container";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>Hero Component</Container>
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
