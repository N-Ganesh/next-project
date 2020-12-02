import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
const Index = () => {
  return (
    <Layout>
      <Container className="text-center" style={{ backgroundColor: "white" }}>
        <h1>Hello World</h1>
        <p>
          Irure adipisicing commodo duis ea. Aliquip voluptate Lorem est do do
          nulla ad. Ipsum id mollit fugiat aliqua.
        </p>
        <ImageCarousel />
        <div className="mt-2 font-weight-bold home-captions">
          <p>Stronger the urge to work hard</p>
          <p> Smarter the ideas to gain profit</p>
        </div>
      </Container>
      <div className="bg-dark text-white text-center">
        Irure adipisicing commodo duis ea. Aliquip voluptate Lorem est do do
        nulla ad. Ipsum id mollit fugiat aliqua.
      </div>
    </Layout>
  );
};
export default Index;
