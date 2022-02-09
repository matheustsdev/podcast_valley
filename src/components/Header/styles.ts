import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 0 4rem;
  background-color: var(--shape);

  font-family: "inter";
  color: var(--text-body);

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--line);
`;

export const LogoMark = styled.div`
  width: 450px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 0;
    height: 2rem;
    border: 1px solid var(--line);
  }
`;
