interface EpisodesProps {
  id: string;
  title: string;
  members: string;
  published_at: string;
  formattedDate: string;
  thumbnail: string;
  description: string;

  file: {
    url: string;
    type: string;
    duration: number;
  };
}

function episodeDateFormatter(date: string) {
  const newDate = new Date(date).toLocaleDateString("pt-br", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  const dateFormatted = `${newDate.slice(0, 2)} ${
    newDate.charAt(6).toLocaleUpperCase() + newDate.slice(7, 9)
  } ${newDate.slice(14, 16)}`;

  return dateFormatted;
}

function headerDateFormatter(date: string) {
  const newDate = new Date(date).toLocaleDateString("pt-br", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const dateFormatted = `${
    newDate.charAt(0).toLocaleUpperCase() + newDate.slice(1, 3)
  },  ${newDate.slice(7, 9)}
    ${newDate.charAt(12).toLocaleUpperCase() + newDate.slice(13, 15)}`;

  return dateFormatted;
}
function timeFormatter(time: number) {
  const minute = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const timeFormatted = `${`0${minute}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;

  return timeFormatted;
}

export { episodeDateFormatter, timeFormatter, headerDateFormatter };
