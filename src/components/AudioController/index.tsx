import {
  AudioTrack,
  Container,
  PlayButton,
  ButtonsContainer,
  TimerControl,
} from "./styles";
import { FaPlay, FaRandom } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { useState } from "react";

export function AudioController() {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <Container>
      <audio>No momento, o navegador não é capaz de iniciar um audio.</audio>
      <TimerControl>
        <p>00:00</p>
        <AudioTrack
          type="range"
          disabled
          min={0}
          max={100}
          value={currentTime}
          onChange={(e) => setCurrentTime(Number(e.target.value))}
        />
        <p>00:00</p>
      </TimerControl>
      <ButtonsContainer>
        <button className="audioControl">
          <FaRandom />
        </button>

        <button className="audioControl">
          <IoPlaySkipBack />
        </button>

        <PlayButton type="button" className="playButton">
          <FaPlay />
        </PlayButton>

        <button className="audioControl">
          <IoPlaySkipForward />
        </button>

        <button className="audioControl">
          <FiRepeat />
        </button>
      </ButtonsContainer>
    </Container>
  );
}
