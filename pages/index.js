import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import Deck from "../components/CardDeck";
const Index = () => {
  return (
    <Layout>
      <Container
        className="text-center p-2"
        style={{ backgroundColor: "white" }}
      >
        <h1>Hello World</h1>
        <p>
          Irure adipisicing commodo duis ea. Aliquip voluptate Lorem est do do
          nulla ad. Ipsum id mollit fugiat aliqua.
        </p>
        <ImageCarousel />
        <div className="mt-2 font-weight-bold home-captions">
          <p>Stronger the urge to work hard</p>
          <p className="mb-0"> Smarter the ideas to gain profit</p>
        </div>
      </Container>
      <div className="bg-dark text-white text-center p-2">
        Irure adipisicing commodo duis ea. Aliquip voluptate Lorem est do do
        nulla ad. Ipsum id mollit fugiat aliqua.Irure adipisicing commodo duis
        ea. Aliquip voluptate Lorem est do do nulla ad. Ipsum id mollit fugiat
        aliqua.Irure adipisicing commodo duis ea. Aliquip voluptate Lorem est do
        do nulla ad. Ipsum id mollit fugiat aliqua.Irure adipisicing commodo
        duis ea. Aliquip voluptate Lorem est do do nulla ad. Ipsum id mollit
        fugiat aliqua.Irure adipisicing commodo duis ea. Aliquip voluptate Lorem
        est do do nulla ad. Ipsum id mollit fugiat aliqua.Irure adipisicing
        commodo duis ea. Aliquip voluptate Lorem est do do nulla ad. Ipsum id
        mollit fugiat aliqua.Irure adipisicing commodo duis ea. Aliquip
        voluptate Lorem est do do nulla ad. Ipsum id mollit fugiat aliqua.Irure
        adipisicing commodo duis ea. Aliquip voluptate Lorem est do do nulla ad.
        Ipsum id mollit fugiat aliqua.Irure adipisicing commodo duis ea. Aliquip
        voluptate Lorem est do do nulla ad. Ipsum id mollit fugiat aliqua.
      </div>
      <Deck />
    </Layout>
  );
};
export default Index;
