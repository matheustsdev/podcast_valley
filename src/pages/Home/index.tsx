import { CardCasts } from "../../components/CardCasts";
import { CastTable } from "../../components/CastTable";
import { Header } from "../../components/Header";
import { PlayerView } from "../../components/PlayerView";
import { Container, Wrapper, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>
          <h1>Ultimos lançamentos</h1>
          <div className="lastPosts">
            <CardCasts />
            <CardCasts />
          </div>
          <h1>Todos os episódios</h1>
          <CastTable />
        </Content>
      </Wrapper>
      <PlayerView />
    </Container>
  );
}
