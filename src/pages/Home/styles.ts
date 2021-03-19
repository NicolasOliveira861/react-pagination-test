import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .list-group {
    margin: 3em 2em;
    width: 80%;
    border: 1px solid #000000;

    > .list-group-item {
      border-bottom: 1px solid #000000;
      list-style-type: none;
      padding: 16px 14px;

      :last-child {
        border-bottom: none;
      }
    }
  }
`;

export const PagesArea = styled.nav`
  > ul {
    display: flex;
    flex-direction: row;
    border: 1px solid #000000;

    > li {
      list-style: none;
      border-right: 1px solid #000000;
      padding: 12px 10px;

      :last-child {
        border-right: none;
      }

      > a {
        text-decoration: none;
        font-size: 1.2em;
      }
    }
  }
`;
