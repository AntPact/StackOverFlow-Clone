import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Aside from "../components/Aside";
import Header from "../components/Header";
import LayoutContainer from "../components/LayoutContainer";
import PageContainer from "../components/PageContainer";
import AnswerContent from "../components/qna/AnswerContent";
import AnswerForm from "../components/qna/AnswerForm";
import QnAComment from "../components/qna/QnAComment";
import QnAHeader from "../components/qna/QnAHeader";
import QuestionContent from "../components/qna/QuestionContent";
import RelatedContents from "../components/qna/RelatedContents";
import Sidebar from "../components/Sidebar";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 1088px;
`;

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// header 밑 부분 정렬
const ContentContainer = styled.div`
  display: flex;
  margin-top: 18px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 50px;
`;

const Title = styled.h2`
  color: #232629;
  font-size: 20px;
  margin: 25px 0;
`;

export default function QuestionDetail() {
  const { questionId } = useParams();

  const [answers, setAnswers] = useState([]);
  const [totalANum, setTotalANum] = useState(0);
  const [questionVotes, setQuestionVotes] = useState(0);

  const answerData = async () => {
    try {
      const answerList = await (
        await axios.get("http://localhost:3001/answer")
      ).data;
      setAnswers(answerList);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    answerData();
  }, []);
  console.log(answers);
  return (
    <>
      <Header />
      <Sidebar />
      <LayoutContainer>
        <PageContainer>
          <MainContainer>
            {answers.map((ans) => (
              <QnAHeader
                title={ans.questionTitle}
                view={ans.views}
                createdAt={new Date()}
                updatedAt={new Date()}
              />
            ))}
            <ContentContainer>
              <QnAContainer>
                {answers.map((ans) => (
                  <QuestionContent
                    content={ans.questionContent}
                    tags={ans.tags && ans.tags.map((el) => el.tagWord)}
                    id={ans.questionId}
                    user={ans.nickname}
                    setQuestionVotes={setQuestionVotes}
                    questionVotes={questionVotes}
                    createdAt={new Date()}
                  />
                ))}
                <QnAComment />
                <Title>{answers.length} Answer</Title>
                {answers &&
                  answers.map((ans) => (
                    <AnswerContent
                      key={ans.answers.map((el) => el.answer_id)}
                      ansId={ans.answers.map((el) => el.answer_id)}
                      queId={ans.answers.map((el) => el.member_id)}
                      content={ans.answers.map((el) => el.answer_content)}
                      user={ans.answers.map((el) => el.nickname)}
                      createdAt={new Date()}
                    />
                  ))}
                <AnswerForm id={questionId} />
              </QnAContainer>
              <AsideContainer>
                <Aside />
                <RelatedContents />
              </AsideContainer>
            </ContentContainer>
          </MainContainer>
        </PageContainer>
      </LayoutContainer>
    </>
  );
}
