import { Container, Content } from "./styles";
import { FaPlay } from "react-icons/fa";
import { episodeDateFormatter, timeFormatter } from "../../utils/formatters";

interface EpisodesProps {
  episode: {
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
  };
}

export function CardCasts({ episode }: EpisodesProps) {
  return (
    <Container>
      <img src={episode.thumbnail} alt={episode.title} />
      <Content>
        <h2>{episode.title}</h2>
        <p>{episode.members}</p>
        <span>
          {episodeDateFormatter(episode.published_at)} -{" "}
          {timeFormatter(episode.file.duration)}
        </span>
      </Content>
      <button>
        <FaPlay />
      </button>
    </Container>
    // <Container>
    //   <img src="https://source.unsplash.com/random/76x76" alt="" />
    //   <Content>
    //     <h2>O que é um bom código?</h2>
    //     <p>Diego e Richard</p>
    //     <span>8 Jan 21 - 1:35:18</span>
    //   </Content>
    //   <button>
    //     <FaPlay />
    //   </button>
    // </Container>
  );
}
