import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const User = styled.a`
  margin: 0 6px;
  text-decoration: none;
  color: #0074cc;
  :visited {
    text-decoration: none;
  }
  &.post-owner {
    margin: 0;
  }
`;

const Time = styled.div`
  margin-right: 5px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #6a737c;
`;

const MenuUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 35px;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const Menu = styled.span`
  color: #6a737c;
  font-size: 13px;
  margin-right: 10px;
  &.delete {
    cursor: pointer;
  }
`;

const PageMove = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PostInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 67px;
  border-radius: 4px;
  padding: 8px 8px;
  font-size: 13px;
  background-color: rgb(220, 233, 246);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;

const UserPic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 4px;
  margin-right: 4px;
  color: rgb(250, 250, 250, 0.95);
  background-color: #0074cc;
`;

const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 25px 20px 20px 20px;
  border: 1px solid #f4b4b6;
  border-radius: 5px;
  background-color: #fdf2f2;
  color: #3b4045;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  div {
    span {
      color: #de4f54;
      font-weight: bold;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  button {
    font-weight: bold;
    margin: 10px 60px 0;
    border: none;
    background: none;
    &:hover {
      color: #d0393e;
    }
  }
`;
export default function ContentMenu({ path, user, createdAt }) {
  const [delClicked, setDelClicked] = useState(false);
  const [isAuthor, setIsAuthor] = useState(true);

  const handleDelete = () => {
    setDelClicked((prev) => !prev);
  };
  return (
    <MenuUserContainer>
      <MenuContainer>
        <Menu>Share</Menu>
        {isAuthor ? (
          <>
            <Menu>{/* <PageMove to={`/${path}/edit`}>Edit</PageMove> */}</Menu>
            <Menu className="delete" onClick={handleDelete}>
              Delete
            </Menu>
          </>
        ) : null}
        {delClicked ? (
          <DeleteModal>
            <div>
              Are you sure you want to <span>delete</span> this post?
            </div>
            <BtnContainer>
              <button className="yes" type="button">
                Yes
              </button>
              <button className="no" type="button" onClick={handleDelete}>
                No
              </button>
            </BtnContainer>
          </DeleteModal>
        ) : null}
      </MenuContainer>
      <PostInfoBox>
        <Time>
          {`asked `}
          {format(createdAt)}
        </Time>
        <UserInfo>
          <UserPic>
            <FontAwesomeIcon icon={faUser} />
          </UserPic>
          <User className="post-owner">{user}</User>
        </UserInfo>
      </PostInfoBox>
    </MenuUserContainer>
  );
}
