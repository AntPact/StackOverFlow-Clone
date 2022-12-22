import React from "react";
import styled from "styled-components";

const HeaderBox = styled.header`
  min-width: auto;
  box-sizing: 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  border-top: 3px solid hsl(27, 90%, 55%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function Header() {
  return <div>Header</div>;
}
