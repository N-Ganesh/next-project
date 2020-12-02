import { Container } from "react-bootstrap";
import Head from "next/head";
import Deck from "../../components/CardDeck";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Container className="bg-white">
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className="text-center mb-0"> Projects </h1>
      <Deck />
      <Deck />
      <Deck />
    </Container>
  );
};

export default Index;
