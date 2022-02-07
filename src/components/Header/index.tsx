import { Container, LogoMark } from "./styles";
import LogoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <LogoMark>
        <img src={LogoSvg} alt="Podcastr" />
        <div />
        <p>O melhor para você ouvir, sempre</p>
      </LogoMark>
      <span>Qui, 8 Abril</span>
    </Container>
  );
}
