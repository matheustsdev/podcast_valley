import { Container, PlayerTitle } from "./styles";
import HeadphoneSvg from "../../assets/headphone.svg";
import { ImagePlayer } from "../ImagePlayer";
import { AudioController } from "../AudioController";

export function PlayerView() {
  return (
    <Container>
      <PlayerTitle>
        <img src={HeadphoneSvg} alt="Headphone" />
        <p>Tocando agora</p>
      </PlayerTitle>

      <ImagePlayer />

      <AudioController />
    </Container>
  );
}
