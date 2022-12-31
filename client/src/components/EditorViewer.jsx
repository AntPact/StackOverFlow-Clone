import MDEditor from "@uiw/react-md-editor";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 650px;
`;

export default function EditorViewer({ content }) {
  return (
    <Container>
      <MDEditor.Markdown source={content} />
    </Container>
  );
}
