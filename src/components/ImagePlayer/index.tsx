import { useEpisodes } from "../../hook/useEpisodes";
import { Container } from "./styles";

export function ImagePlayer() {
  const { activeEpisode } = useEpisodes();

  return (
    <Container>
      {activeEpisode.id ? (
        <img src={activeEpisode.thumbnail} alt="Espaço" />
      ) : (
        <>
          <div className="emptyImg" />
          <p>
            Selecione um <br />
            podcast para ouvir
          </p>
        </>
      )}
    </Container>
  );
}
