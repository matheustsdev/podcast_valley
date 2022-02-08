import styled from "styled-components";

export const Container = styled.aside`
  width: 30%;
  height: 100vh;
  padding: 3rem 0;
  background-color: var(--purple);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: white;
`;

export const PlayerTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  font-family: "lexend";
  font-size: 1rem;

  padding: 0 7rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
