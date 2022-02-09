import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface EpisodesProviderProps {
  children: ReactNode;
}

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
interface EpisodeHookProps {
  episodes: EpisodesProps[];
  handleActiveEpisode: (id: string) => void;
  activeEpisode: EpisodesProps;
  resetActiveEpisode: () => void;
}

export const EpisodesContext = createContext<EpisodeHookProps>(
  {} as EpisodeHookProps
);

export function EpisodesProvider({ children }: EpisodesProviderProps) {
  const [episodes, setEpisodes] = useState<EpisodesProps[]>([]);
  const [activeEpisode, setActiveEpisode] = useState<EpisodesProps>(
    {} as EpisodesProps
  );

  function handleActiveEpisode(id: string) {
    const activeEpisodeIndex = episodes.findIndex(
      (episode) => episode.id === id
    );

    setActiveEpisode(episodes[activeEpisodeIndex]);
  }

  function resetActiveEpisode() {
    setActiveEpisode({} as EpisodesProps);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json"
    )
      .then((response) => response.json())
      .then((out) => setEpisodes(out.episodes));
  }, []);

  return (
    <EpisodesContext.Provider
      value={{
        episodes,
        handleActiveEpisode,
        activeEpisode,
        resetActiveEpisode,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
}

export function useEpisodes(): EpisodeHookProps {
  const context = useContext(EpisodesContext);

  return context;
}
