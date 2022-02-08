import { Header } from "../../components/Header";
import { PlayerView } from "../../components/PlayerView";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <PlayerView />
    </Container>
  );
}
