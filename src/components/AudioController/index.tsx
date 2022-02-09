import {
  AudioTrack,
  Container,
  PlayButton,
  ButtonsContainer,
  TimerControl,
  PauseButton,
} from "./styles";
import { FaPlay, FaRandom } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { BsFillPauseFill } from "react-icons/bs";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { useEpisodes } from "../../hook/useEpisodes";
import { timeFormatter } from "../../utils/formatters";

interface EpisodesProps {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;

  file: {
    url: string;
    type: string;
    duration: number;
  };
}

interface StyledRangeProps extends InputHTMLAttributes<Range> {
  position?: number;
}

export function AudioController() {
  const [currentTime, setCurrentTime] = useState(0);
  const [trackPosition, setTrackPosition] = useState(0.0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { activeEpisode } = useEpisodes();

  //Elements
  const audio = document.getElementById("audioPlayer") as HTMLAudioElement;
  const seekBar = document.querySelector(
    "input[type=range]"
  ) as StyledRangeProps;

  //Refs to avoid first execution of useEffect
  const episodeRef = useRef<EpisodesProps>();
  const currentTimeRef = useRef<Number>();

  //Manual change in audio track function
  function handleChangeAudioTime(e: any) {
    setCurrentTime(Number(e.target.value));
    audio.currentTime = currentTime;
  }

  //Auto update audio track function
  function updateAudioTime() {
    setCurrentTime(audio.currentTime);
    setTrackPosition(audio.currentTime / activeEpisode.file.duration);

    console.log(
      Math.floor((audio.currentTime / activeEpisode.file.duration) * 174 + 1)
    );
  }

  //Set if is playing audio
  function handleTooglePlay() {
    isPlaying ? audio.pause() : audio.play();

    setIsPlaying(!isPlaying);
  }

  //Set first current refs
  useEffect(() => {
    episodeRef.current = activeEpisode;
    currentTimeRef.current = currentTime;
  });

  const episodeRefValue = episodeRef.current ?? activeEpisode;

  //Put data in audio tag
  useEffect(() => {
    if (episodeRefValue !== activeEpisode) {
      audio.src = activeEpisode.file.url;
      seekBar.max = `${activeEpisode.file.duration}`;
    }
  }, [activeEpisode, episodeRefValue, audio, seekBar]);

  return (
    <Container>
      <audio
        id="audioPlayer"
        onTimeUpdate={() => {
          updateAudioTime();
        }}
      >
        No momento, o navegador não é capaz de iniciar um audio.
      </audio>
      <TimerControl disabled={!activeEpisode.id}>
        <p className="currentTime">
          {activeEpisode.id ? timeFormatter(audio.currentTime) : "00:00"}
        </p>
        <AudioTrack
          position={trackPosition}
          type="range"
          disabled={activeEpisode.id === undefined}
          min={0}
          max={100}
          value={currentTime}
          onInput={(e) => handleChangeAudioTime(e)}
          onChange={(e) => handleChangeAudioTime(e)}
          onClick={(e) => handleChangeAudioTime(e)}
        />
        <p className="totalTime">
          {activeEpisode.id
            ? timeFormatter(activeEpisode.file.duration)
            : "00:00"}
        </p>
      </TimerControl>
      <ButtonsContainer disabled={!activeEpisode.id}>
        <button className="audioControl">
          <FaRandom />
        </button>

        <button className="audioControl">
          <IoPlaySkipBack />
        </button>

        {isPlaying && activeEpisode.id ? (
          <PauseButton type="button" onClick={() => handleTooglePlay()}>
            <BsFillPauseFill />
          </PauseButton>
        ) : (
          <PlayButton
            type="button"
            className="playButton"
            onClick={() => handleTooglePlay()}
          >
            <FaPlay />
          </PlayButton>
        )}

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
