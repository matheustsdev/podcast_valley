import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./global/theme";
import { EpisodesProvider } from "./hook/useEpisodes";
import { Description } from "./pages/Description";

ReactDOM.render(
  <EpisodesProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Description />} path="description" />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </EpisodesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
