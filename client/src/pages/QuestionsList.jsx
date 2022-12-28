import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutContainer from "../components/LayoutContainer";
import PageContainer from "../components/PageContainer";
import Sidebar from "../components/Sidebar";
import useScrollTop from "../util/useScrollTop";

export default function QuestionsList() {
  useScrollTop();
  return (
    <>
      <Header />
      <Sidebar />
      <LayoutContainer>
        <PageContainer>QuestionsList</PageContainer>
      </LayoutContainer>
      <Footer />
    </>
  );
}
