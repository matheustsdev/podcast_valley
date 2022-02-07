import { Header } from "../../components/Header";
import { Player } from "../../components/Player";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Player />
    </Container>
  );
}
