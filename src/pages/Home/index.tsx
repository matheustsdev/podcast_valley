import { CardCasts } from "../../components/CardCasts";
import { CastTable } from "../../components/CastTable";
import { Header } from "../../components/Header";
import { PlayerView } from "../../components/PlayerView";
import { Container, Wrapper, Content } from "./styles";

const mockEpisodes = [
  {
    id: "a-importancia-da-contribuicao-em-open-source",
    title: "Faladev #30 | A importância da ...",
    members: "Dego Fernandes, ...",
    published_at: "2021-01-22 16:35:40",
    thumbnail:
      "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",
    description:
      "<p>Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a importância da contribuição open source e quais desafios circulam na comunidade.</p>",
    file: {
      url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a",
      type: "audio/x-m4a",
      duration: 3981,
    },
  },
  {
    id: "uma-conversa-sobre-programacao-funcional-e-orientacao-a-objetos",
    title: "Faladev #29 | Duas perspectivas ...",
    members: "Dego Fernandes, ...",
    published_at: "2021-01-15 13:00:00",
    thumbnail:
      "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg",
    description:
      "<p>Diego e Dani receberam Laura Beatris e Rafael Camarda na mesa do Faladev para conversarem sobre programação funcional e programação orientada a objetos.</p>",
    file: {
      url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/funcional.m4a",
      type: "audio/x-m4a",
      duration: 4237,
    },
  },
];

export function Home() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>
          <h1>Ultimos lançamentos</h1>
          <div className="lastPosts">
            <CardCasts episode={mockEpisodes[0]} />
            <CardCasts episode={mockEpisodes[1]} />
          </div>
          <h1>Todos os episódios</h1>
          <CastTable />
        </Content>
      </Wrapper>
      <PlayerView />
    </Container>
  );
}
