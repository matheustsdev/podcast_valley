import { Container, Content } from "./styles";
import { FaPlay } from "react-icons/fa";

export function CardCasts() {
  return (
    <Container>
      <img src="https://source.unsplash.com/random/76x76" alt="" />
      <Content>
        <h2>O que é um bom código?</h2>
        <p>Diego e Richard</p>
        <span>8 Jan 21 - 1:35:18</span>
      </Content>
      <button>
        <FaPlay />
      </button>
    </Container>
  );
}
