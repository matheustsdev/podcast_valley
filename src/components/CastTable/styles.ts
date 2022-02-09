import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;

  & tr {
    border-bottom: 1px solid var(--line);

    .date {
      width: 6rem;
    }

    .members {
      width: 12rem;
    }

    .link {
      all: none;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--title-heading);
    }
  }

  th {
    font-size: 0.75rem;
    font-family: "Lexend";
    color: var(--text-body-2);
    text-align: left;
    line-height: 1rem;

    padding-bottom: 0.75rem;
  }

  td {
    font-family: "Inter";
    font-size: 0.75rem;
    line-height: 17px;
    color: var(--text-body);

    padding: 0.75rem 0.125rem;

    &:first-child {
      font-family: "Lexend";
      font-weight: 500;
      font-size: 0.875rem;
      color: black;

      display: flex;
      align-items: center;
      padding: 0.75rem 0;

      img {
        width: 2.5rem;
        height: 2.5rem;
        background: #eee;
        border-radius: 0.5rem;

        object-fit: cover;
        object-position: center;

        margin-right: 1rem;
      }
    }

    button {
      width: 2rem;
      height: 2rem;
      background: var(--shape);
      border: 1px solid var(--line);
      border-radius: 0.625rem;

      svg {
        color: var(--green);
        font-size: 0.75rem;
      }
    }
  }
`;
