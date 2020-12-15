import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import Deck from "../components/CardDeck";
import duplicatePara from "../utils/utils";
const Index = () => {
  return (
    <>
      <Container
        className="text-center p-2 text-dark"
        style={{ backgroundColor: "white" }}
      >
        <h1>Hello World</h1>
        <p>{duplicatePara(1)}</p>
        <ImageCarousel />
        <div className="mt-2 font-weight-bold home-captions">
          <p>Stronger the urge to work hard</p>
          <p className="mb-0"> Smarter the ideas to gain profit</p>
        </div>
      </Container>
      <div className="bg-dark text-white text-center p-2">
        {duplicatePara(5)}
      </div>
      <Deck />
    </>
  );
};
export default Index;
