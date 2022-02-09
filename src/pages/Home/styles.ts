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
  padding: 0 2rem;

  .lastPosts {
    display: flex;
    justify-content: space-between;

    align-items: center;

    width: 100%;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;

    font-family: "lexend";
    font-size: 1.25rem;
  }
`;
