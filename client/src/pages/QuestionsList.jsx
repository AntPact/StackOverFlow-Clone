import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutContainer from "../components/LayoutContainer";
import PageContainer from "../components/PageContainer";
import Sidebar from "../components/Sidebar";

export default function QuestionsList() {
  return (
    <>
      <Sidebar />
      <Header />
      <LayoutContainer>
        <PageContainer>QuestionsList</PageContainer>
      </LayoutContainer>
      <Footer />
    </>
  );
}
