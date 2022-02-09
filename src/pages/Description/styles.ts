import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 12rem;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  button {
    height: 3rem;
    width: 3rem;
    border-radius: 0.75rem;
    border: none;
    display:flex:
    align-items: center;
    justify-content: center;

    svg {
        margin-top: 0.25rem;
    }


  }

  .gotoHome {
    background-color: var(--purple);
    position: relative;
    left: 1.25rem;

    color: white;
    font-size: 1.75rem;

    svg {
        margin-right: 0.25rem;
    }
  }

  .playButton {
    background-color: var(--green);
    position: relative;
    right: 1.25rem;

    color: white;
    font-size: 1rem;

    svg {
        margin-left: 0.25rem;
    }
  }

  img {
    width: 50rem;
    height: 18rem;
    border-radius: 1rem;
    object-fit: cover ;

    object-position: center;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: var(--text-heading);
    margin-bottom: 1.5rem;
    font-family: "Lexend"
    font-weight: 600;
  }

  span {
    color: var(--text-body);
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Inter";
    font-weight: 400;
  }

  div.line {
    border: 1px solid var(--line);
    width: 100%;
    height: 0;
    margin-bottom: 2rem;
  }

  p {
    color: var(--text-heading);
    line-height: 1.625rem;
    font-family: "Inter";
    font-weight: 400;
  }
`;
