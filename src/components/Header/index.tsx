import { Container, LogoMark } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { headerDateFormatter } from "../../utils/formatters";

export function Header() {
  const navigate = useNavigate();

  const today = new Date();
  return (
    <Container>
      <LogoMark onClick={() => navigate("/")}>
        <img src={LogoSvg} alt="Podcastr" />
        <div />
        <p>O melhor para você ouvir, sempre</p>
      </LogoMark>
      <span>{headerDateFormatter(today.toString())}</span>
    </Container>
  );
}
