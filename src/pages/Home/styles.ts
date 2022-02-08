import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  width: 70%;
`;
export const Content = styled.main`
  display: flex;
  flex-direction: column;

  .lastPosts {
    display: flex;
    justify-content: space-between;

    align-items: center;

    width: 100%;
  }
  padding: 0 4rem;

  h1 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;

    font-family: "lexend";
    font-size: 1.25rem;
  }
`;
