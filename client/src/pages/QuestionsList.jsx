import axios from "axios";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutContainer from "../components/LayoutContainer";
import QList from "../components/main/QList";
import QuestionListHeader from "../components/main/QuestionListHeader";
import PageContainer from "../components/PageContainer";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import useScrollTop from "../util/useScrollTop";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 13px;
  width: 751px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 50px;
`;
export default function QuestionsList() {
  useScrollTop();

  // 페이지네이션
  const [lists, setLists] = useState([]);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const handleList = async () => {
    try {
      const questionList = await (
        await axios.get("http://localhost:3001/question")
      ).data;
      setLists(questionList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <LayoutContainer>
        <PageContainer>
          <Box>
            <ListContainer>
              <QuestionListHeader totalQNum={lists.length} />
              {lists.slice(offset, offset + limit).map((list) => (
                <QList
                  nickname={list.nickname}
                  questionContent={list.questionContent}
                  questionTitle={list.questionTitle}
                  memberId={list.memberId}
                  createdAt={new Date()}
                  tags={list.tags.map((tag) => tag.tagWord)}
                />
              ))}
              <Pagination
                total={lists.length}
                limit={limit}
                page={page}
                setPage={setPage}
                setLimit={setLimit}
              />
            </ListContainer>
            <AsideContainer>
              <Aside />
            </AsideContainer>
          </Box>
        </PageContainer>
      </LayoutContainer>
      <Footer />
    </>
  );
}
