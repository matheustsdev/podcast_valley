import { Container, TitlePlayer } from "./styles";
import HeadphoneSvg from "../../assets/headphone.svg";
import { ImagePlayer } from "../ImagePlayer";
import { AudioController } from "../AudioController";

export function PlayerView() {
  return (
    <Container>
      <TitlePlayer>
        <img src={HeadphoneSvg} alt="Headphone" />
        <p>Tocando agora</p>
      </TitlePlayer>

      <ImagePlayer />

      <AudioController />
    </Container>
  );
}
