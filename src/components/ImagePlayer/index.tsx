import WaitingCastImg from "../../assets/standby.svg";
import { Container } from "./styles";

export function ImagePlayer() {
  return (
    <Container>
      <img src={WaitingCastImg} alt="Espaço" />
      <p>
        Selecione um <br />
        podcast para ouvir
      </p>
    </Container>
  );
}
