import React from "react";
import styled from "styled-components";
import EditorViewer from "../EditorViewer";
import AnswerSideBar from "./AnswerSideBar";
import ContentMenu from "./ContentMenu";

const Container = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const AnsContent = styled.div`
  color: #232629;
  font-size: 15px;
  border-bottom: 1px solid #e3e6e8;
  width: 100%;
`;

export default function AnswerContent({
  key,
  ansId,
  queId,
  content,
  user,
  createdAt,
}) {
  console.log(content);
  return (
    <Container>
      <AnswerSideBar id={ansId} />
      <AnsContent>
        <EditorViewer content={content[0]} />
        <ContentMenu
          user={user}
          path={`answer/${ansId}`}
          createdAt={createdAt}
          ansId={ansId}
          queId={queId}
          target="answered"
        />
      </AnsContent>
    </Container>
  );
}
