import { Container } from "react-bootstrap";
import { duplicatePara } from "../../utils/utils";
const About = () => {
  return (
    <Container className="text-center">
      <h1>{duplicatePara(20)}</h1>
    </Container>
  );
};

export default About;
