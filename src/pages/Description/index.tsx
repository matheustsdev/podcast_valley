import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { Header } from "../../components/Header";
import { useEpisodes } from "../../hook/useEpisodes";
import { episodeDateFormatter, timeFormatter } from "../../utils/formatters";
import { Banner, Container, Content } from "./styles";

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

export function Description() {
  const [episodeId, setEpisodeId] = useSearchParams();
  const { episodes, handleActiveEpisode, resetActiveEpisode } = useEpisodes();
  const navigate = useNavigate();
  const [lookedEpisode, setLookedEpisode] = useState<EpisodesProps>(
    {} as EpisodesProps
  );

  const dataRef = useRef<EpisodesProps>();

  function handleStartEpisode() {
    navigate("/");
    setTimeout(() => handleActiveEpisode(lookedEpisode.id), 1500);
  }

  function updatelookedEpisode() {
    if (lookedEpisodeIndex !== -1) {
      setLookedEpisode(episodes[lookedEpisodeIndex]);
    } else return;
  }

  useEffect(() => {
    updatelookedEpisode();
    resetActiveEpisode();
    dataRef.current = lookedEpisode;
  });

  const dataRefValue = dataRef.current ?? lookedEpisode;

  const lookedEpisodeIndex = episodes.findIndex(
    (episode) => episode.id === episodeId.toString().slice(0, -1)
  );

  useEffect(() => {
    if (dataRefValue !== lookedEpisode) {
      document.getElementById(
        "description"
      )!.innerHTML = `${lookedEpisode.description}`;

      const infoText = `${lookedEpisode.members} - ${episodeDateFormatter(
        lookedEpisode.published_at
      )} -
      ${timeFormatter(lookedEpisode.file.duration)}`;

      document.querySelector("main span.details")!.innerHTML = infoText;
    }
  }, [lookedEpisode, dataRefValue]);

  return (
    <>
      <Header />
      <Container>
        <Banner>
          <button className="gotoHome" onClick={() => navigate("/")}>
            <IoChevronBack />
          </button>

          <img src={lookedEpisode.thumbnail} alt="" />
          <button className="playButton" onClick={() => handleStartEpisode()}>
            <FaPlay />
          </button>
        </Banner>
        <Content>
          <h1>{lookedEpisode.title}</h1>
          <span className="details"></span>
          <div className="line" />
          <div id="description"></div>
        </Content>
      </Container>
    </>
  );
}
