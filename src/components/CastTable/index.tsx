import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEpisodes } from "../../hook/useEpisodes";
import { episodeDateFormatter, timeFormatter } from "../../utils/formatters";
import { Container } from "./styles";

export function CastTable() {
  const { episodes, handleActiveEpisode } = useEpisodes();
  return (
    <Container>
      <thead>
        <tr>
          <th>PODCAST</th>
          <th>INTEGRANTES</th>
          <th>DATA</th>
          <th>DURAÇÃO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode) => (
          <tr key={episode.id}>
            <td>
              <Link to={`description?${episode.id}`} className="link">
                <img
                  src={episode.thumbnail}
                  alt={`Banner do episódio: ${episode.title}`}
                />
                {episode.title}
              </Link>
            </td>
            <td className="members">{episode.members}</td>
            <td className="date">
              {episodeDateFormatter(episode.published_at)}
            </td>
            <td>{timeFormatter(episode.file.duration)}</td>
            <td>
              <button onClick={() => handleActiveEpisode(episode.id)}>
                <FaPlay />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
