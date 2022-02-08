import { FaPlay } from "react-icons/fa";
import { Container } from "./styles";

export function CastTable() {
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
        <tr>
          <td>
            <img src="https://source.unsplash.com/random/40x40?sig=1" alt="" />{" "}
            A vida é boa
          </td>
          <td>Tiago,Diego e Pellizzetti</td>
          <td>8 Jan 21</td>
          <td>1:35:18</td>
          <td>
            <button>
              <FaPlay />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://source.unsplash.com/random/40x40?sig=2" alt="" />{" "}
            A vida é boa
          </td>
          <td>Tiago,Diego e Pellizzetti</td>
          <td>8 Jan 21</td>
          <td>1:35:18</td>
          <td>
            <button>
              <FaPlay />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://source.unsplash.com/random/40x40?sig=3" alt="" />{" "}
            A vida é boa
          </td>
          <td>Tiago,Diego e Pellizzetti</td>
          <td>8 Jan 21</td>
          <td>1:35:18</td>
          <td>
            <button>
              <FaPlay />
            </button>
          </td>
        </tr>
      </tbody>
    </Container>
  );
}
