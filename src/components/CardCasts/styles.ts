import styled from "styled-components";

//Card Style
export const Container = styled.div`
  display: flex;
  align-items: center;

  background: var(--shape);
  width: 27rem;
  height: 8.5rem;
  padding: 1.25rem;

  border-radius: 1.5rem;
  border: 1px solid var(--line);

  img {
    width: 6rem;
    height: 6rem;
    background: #eee;

    border-radius: 0.75rem;
    border: none;
  }

  button {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--shape);
    border: 1px solid var(--line);
    border-radius: 0.625rem;

    margin: 2.5rem 0 0 2rem;

    svg {
      color: var(--green);
      font-size: 0.75rem;
    }
  }
`;

//Infos container
export const Content = styled.div`
  margin-left: 1rem;

  h2 {
    font-size: 1rem;
    font-family: "lexend";

    margin-bottom: 0.5rem;
  }

  p,
  span {
    font-size: 0.75rem;
    color: var(--text-body);
    font-family: "inter";
  }

  p {
    margin-bottom: 1rem;
  }
`;
