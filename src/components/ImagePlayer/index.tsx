import { Container } from "./styles";

export function ImagePlayer() {
  const imgUrl = undefined;
  return (
    <Container>
      {imgUrl ? <img src="" alt="Espaço" /> : <div className="emptyImg" />}
      <p>
        Selecione um <br />
        podcast para ouvir
      </p>
    </Container>
  );
}
