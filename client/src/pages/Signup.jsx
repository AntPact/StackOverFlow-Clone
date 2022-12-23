import React from "react";
import styled from "styled-components";

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f1f2f4;
  min-height: 100vh;
`;

export default function Signup() {
  return <SignupBox></SignupBox>;
}
