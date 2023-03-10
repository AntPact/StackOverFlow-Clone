import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  margin-left: 0px;
  padding-top: 47px;
  /* padding: 24px; */

  @media screen and (min-width: 641px) {
    margin-left: 164px;
  }
  /* @media screen and (min-width: 981px) {
    display: flex;
    justify-content: space-between;
  } */
  > main {
    width: 100%;
    @media screen and (min-width: 981px) {
      width: calc(100% - 314px);
    }
  }
`;

export default function PageContainer({ children }) {
  return <Container>{children}</Container>;
}
