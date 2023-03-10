import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import EditorComp from "../components/EditorComp";
import Tag from "../components/ask/Tag";
import TitleCard, {
  FirstBodyCard,
  SecondBodyCard,
  TagCard,
} from "../components/ask/Card";
import Discard from "../components/ask/Discard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LayoutContainer from "../components/LayoutContainer";
import axios from "axios";

const Content = styled.div`
  padding: 50px 0 0 0;
  background-color: #f8faf9;
`;

const Start = styled.div`
  display: flex;
  height: 130px;
  /* margin-bottom: 12px; */
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf);
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 27px;
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Notice = styled.div`
  min-width: 70%;
  margin: 24px 0;
  padding: 24px;
  height: 250px;
  background: #ebf4fb;
  color: #3b4045;
  border: 1px solid hsl(206deg 93% 84%);
  border-radius: 3px;

  @media (max-width: 1100px) {
    width: 100%;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 5px;
    font-size: 0.9rem;

    span {
      color: #0074cc;
    }
  }

  h5 {
    font-size: 0.85rem;
    margin: 15px 0;
  }

  ul {
    margin-left: 30px;
    font-size: 0.85rem;
    list-style-type: disc;
    line-height: 18px;

    li {
      display: list-item;
    }
  }
`;

// 질문 제목
const QuestionTitle = styled.div`
  min-width: 70%;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  margin: 10px 0 0;

  .errorInput {
    &:focus {
      outline: none;
      border-color: #c33e32;
      box-shadow: 0 0 0 5px hsla(358, 62%, 47%, 0.15);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #babfc4;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 4px #cce9fe, 0 0 0 4px #cce9fe;
  }
`;

// 에러 메세지
const ErrorMessage = styled.p`
  margin-top: 10px;
  color: #c33e32;
  font-size: 12px;
`;

// 질문 내용
const QuestionBody = styled.div`
  min-width: 70%;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
  position: relative;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const DimmedLayerBody = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.7;
  z-index: 5;
  cursor: not-allowed;
`;

const Title = styled.div`
  color: #0c0d0e;
  font-weight: 600;
`;

const Desc = styled.div`
  color: #3b4045;
  margin: 0.5rem 0;
  font-size: 0.75rem;
`;

// 질문 태그
const QuestionTags = styled.div`
  min-width: 70%;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
  position: relative;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const DimmedLayerTags = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.7;
  z-index: 5;
  cursor: not-allowed;
`;

// 질문 입력 및 취소 버튼
const BtnContainer = styled.div`
  position: relative;
  display: flex;
  background-color: #f8faf9;
`;

const NextBtn = styled.button`
  margin-top: 0.5rem;
  margin-right: 1rem;
  padding: 10px;
  border: 1px solid #79a7c7;
  border-radius: 3px;
  background: #0995fd;
  color: white;

  &:not(:last-child) {
    margin-top: 0;
  }

  &:hover {
    background-color: hsl(206deg 100% 40%);
    cursor: pointer;
  }
`;

const DiscardBtn = styled.button`
  margin-bottom: 48px;
  margin-left: 20px;
  padding: 10px;
  border: none;
  background: transparent;
  color: #c33e32;
  height: 40px;
  text-align: center;

  &:hover {
    background: #fcf2f1;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const AskBtn = styled.button`
  padding: 10px;
  height: 40px;
  border: 1px solid #79a7c7;
  border-radius: 3px;
  background: #0995fd;
  color: white;

  &:not(:last-child) {
    margin-top: 0;
  }

  &:hover {
    background-color: hsl(206deg 100% 40%);
    cursor: pointer;
  }
`;

const DimmedLayerBtn = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.7;
  z-index: 100;
  cursor: not-allowed;
`;

const AskLayer = styled(DimmedLayerBtn)`
  width: 135px;
  background-color: #f8faf9;
  z-index: 99;
`;

export default function QuestionAsk() {
  const [firstBody, setFirstBody] = useState("");
  const [secondBody, setSecondBody] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  // const initialToken = localStorage.getItem("accessToken");

  const [firstStyle, setFirstStyle] = useState({ display: "block" });
  const [secondStyle, setSecondStyle] = useState({ display: "block" });
  const [tagStyle, setTagStyle] = useState({ display: "block" });

  const [titleCardOpen, setTitleCardOpen] = useState({ visibility: "visible" });
  const [firstBodyCardOpen, setfirstBodyCardOpen] = useState({
    visibility: "hidden",
  });
  const [secondBodyCardOpen, setSecondBodyCardOpen] = useState({
    visibility: "hidden",
  });
  const [tagCardOpen, setTagCardOpen] = useState({ visibility: "hidden" });

  const [discardOpen, setDiscardOpen] = useState(false);

  const [firstBtnActive, setFirstBtnActive] = useState({ display: "block" });
  const [secondBtnActive, setSecondBtnActive] = useState({ display: "block" });
  const [submitBtnActive, setSubmitBtnActive] = useState({ display: "block" });

  const [discard, setDiscard] = useState({ visibility: "hidden" });

  // 입력창 활성화 및 카드 함수
  const onActiveFirstBody = () => {
    setDiscard({ visibility: "visible" });
    setFirstStyle({ display: "none" });
    setTitleCardOpen({ visibility: "hidden" });
    setfirstBodyCardOpen({ visibility: "visible" });
  };

  const onActiveSecondBody = () => {
    setSecondStyle({ display: "none" });
    setfirstBodyCardOpen({ visibility: "hidden" });
    setSecondBodyCardOpen({ visibility: "visible" });
  };

  const onActiveTag = () => {
    setTagStyle({ display: "none" });
    setSecondBodyCardOpen({ visibility: "hidden" });
    setTagCardOpen({ visibility: "visible" });
  };

  // 타이틀 유효성 체크
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  console.log(register());

  // 타이틀 외 바디 onChange 함수
  const handleFirstEditorChange = (value) => {
    setFirstBody(value);
    if (firstBody.length >= 20) {
      setFirstBtnActive({ display: "none" });
    }
  };

  const handleSecondEditorChange = (value) => {
    setSecondBody(value);
    if (secondBody.length >= 20) {
      setSecondBtnActive({ display: "none" });
    }
  };

  // 질문 추가하기 POST 요청
  const addQuestion = async (value) => {
    try {
      await axios.post(`http://localhost:3001/question`, {
        questionTitle: value,
        questionContent: firstBody + secondBody,
        tags: tags.map((tag) => ({ tagWord: tag })),
      });
    } catch (error) {
      console.error(error);
    }
    // fetch(
    //   "http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/ask",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: initialToken,
    //     },
    //     body: JSON.stringify({
    //       title: value,
    //       content: firstBody + secondBody,
    //       tags: tags.map((tag) => ({ tagName: tag })),
    //     }),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  // title은 실시간 반영이 안되고 submit 을 해야 반영이 됨
  const onSubmit = (data) => {
    addQuestion(data.title);
    navigate("/");
  };

  const onPrevent = (e) => {
    e.preventDefault();
  };

  // discard 모달 오픈
  const onDiscardModal = () => {
    setDiscardOpen(!discardOpen);
  };

  return (
    <>
      <Header />
      <Content>
        <LayoutContainer>
          <Start>
            <TitleContainer>
              <h1>Ask a public question</h1>
            </TitleContainer>
          </Start>
          <Container>
            <Notice>
              <h2>Writing a good question</h2>
              <p>
                You’re ready to <span>ask</span> a{" "}
                <span>programming-related question</span> and this form will
                help guide you through the process.
              </p>
              <p>
                Looking to ask a non-programming question? See{" "}
                <span>the topics here</span> to find a relevant site.
              </p>
              <h5>Steps</h5>
              <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
                <li>
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li>Review your question and post it to the site.</li>
              </ul>
            </Notice>
          </Container>
          <Container>
            <QuestionTitle>
              <Title>Title</Title>
              <Desc>
                Be specific and imagine you’re asking a question to another
                person.
              </Desc>
              <Form onSubmit={onPrevent}>
                <Input
                  type="text"
                  name="title"
                  // ref={inputRef}
                  placeholder="e.g.Is there an R function for finding the index of an element in a vector?"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is missing.",
                    },
                    minLength: {
                      value: 15,
                      message: "Title must be at least 15 characters.",
                    },
                  })}
                />
              </Form>
              {errors.title?.message === undefined ? null : (
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
              )}
              <NextBtn onClick={onActiveFirstBody}>Next</NextBtn>
            </QuestionTitle>
            <TitleCard titleCardOpen={titleCardOpen} />
          </Container>
          <Container>
            <QuestionBody>
              <DimmedLayerBody style={firstStyle} />
              <Title>What are the details of your problem?</Title>
              <Desc>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </Desc>
              <EditorComp
                name="firstBody"
                value={firstBody}
                onChange={handleFirstEditorChange}
              />
              <BtnContainer>
                <DimmedLayerBtn style={firstBtnActive} />
                <NextBtn onClick={onActiveSecondBody}>Next</NextBtn>
              </BtnContainer>
            </QuestionBody>
            <FirstBodyCard firstBodyCardOpen={firstBodyCardOpen} />
          </Container>
          <Container>
            <QuestionBody>
              <DimmedLayerBody style={secondStyle} />
              <Title>What did you try and what were you expecting?</Title>
              <Desc>
                Describe what you tried, what you expected to happen, and what
                actually resulted. Minimum 20 characters.
              </Desc>
              <EditorComp
                name="secondBody"
                value={secondBody}
                onChange={handleSecondEditorChange}
              />
              <BtnContainer>
                <DimmedLayerBtn style={secondBtnActive} />
                <NextBtn onClick={onActiveTag}>Next</NextBtn>
              </BtnContainer>
            </QuestionBody>
            <SecondBodyCard secondBodyCardOpen={secondBodyCardOpen} />
          </Container>
          <Container>
            <QuestionTags>
              <DimmedLayerTags style={tagStyle} />
              <Title>Tags</Title>
              <Desc>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </Desc>
              <Tag name="tags" tags={tags} setTags={setTags} />
              <NextBtn onClick={() => setSubmitBtnActive({ display: "none" })}>
                Next
              </NextBtn>
            </QuestionTags>
            <TagCard tagCardOpen={tagCardOpen} />
          </Container>
          <BtnContainer>
            <AskBtn onClick={handleSubmit(onSubmit)}>Post your question</AskBtn>
            <AskLayer style={submitBtnActive} />
            {discardOpen && (
              <Discard
                onDiscardModal={onDiscardModal}
                setFirstBody={setFirstBody}
                setSecondBody={setSecondBody}
                setTags={setTags}
                setValue={setValue}
              />
            )}
            <DiscardBtn onClick={onDiscardModal} style={discard}>
              Discard draft
            </DiscardBtn>
          </BtnContainer>
        </LayoutContainer>
      </Content>
      <Footer />
    </>
  );
}
