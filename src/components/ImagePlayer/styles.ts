import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "lexend";
  text-align: center;

  p {
    position: absolute;
  }

  .emptyImg {
    background: linear-gradient(135deg, rgba(145, 100,250, 0.8)), rgba(145, 100,250, 0)));
    width: 18.5rem;
    height: 21.625rem;
    border: 2px dashed white;
    border-radius: 1.5rem;
  }

  img{
    width: 18.5rem;
    height: 21.625rem;
    border-radius: 1.5rem;

  }
`;
