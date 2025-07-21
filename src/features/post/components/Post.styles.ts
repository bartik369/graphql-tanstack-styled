import { Avatar, Button, Card, Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  max-width: 600px;
  min-width: 300px;
  margin: 20px 30px 100px;
  padding: 35px;
  border-radius: 30px;
  background-color: #161a22;
  box-shadow: 0 4px 4px 0 rgba(45, 51, 68, 0.2),
    0 8px 8px 0 rgba(36, 42, 59, 0.2), 0 16px 16px 0 rgba(37, 44, 61, 0.2),
    0 32px 32px 0 rgba(37, 44, 61, 0.2), 0 50px 50px 0 rgba(37, 44, 61, 0.2),
    0 80px 80px 0 rgba(37, 44, 61, 0.2);
`;
export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const Header = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`;

export const GroupList = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "none" : "flex")};
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const CardInfo = styled(Card)`
  overflow: hidden;
  background-color: #1e232f;
  border: none;
  box-shadow: rgba(17, 20, 27, 0.9) 0px 11px 11px -11px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: rgba(17, 20, 27, 0.8) 0px 35px 30px -30px;
  }
  .ant-card-body {
    padding: 0;
    border: none;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px 0px;
`;
export const CustomAvatar = styled(Avatar)`
  background-color: rgb(42, 102, 231);
  .anticon {
    font-size: 14px;
    color: rgb(231, 231, 231);
  }
`;

export const Title = styled.h3`
  position: relative;
  padding: 12px 20px 10px;
  border-bottom: 1px solid rgb(38, 46, 60);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: rgb(231, 231, 231);
  background-color: #1e232f;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const UserName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: rgb(231, 231, 231);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5px;
  padding: 10px 20px 5px;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;
export const StyledImg = styled.div`
  width: 56px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(35, 41, 54);
  border-radius: 6px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100px;
  }
`;
export const Text = styled.div`
  flex: 1;
  padding-left: 16px;
  font-size: 12px;
  color: rgb(222, 221, 221);
  text-align: left;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px 10px;
`;
export const InteractionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const StyledButton = styled(Button)`
  color: rgb(133, 137, 148);
  background-color: transparent;
  &:hover {
    color: #ffffff !important;
    background-color: transparent !important;
  }
  .anticon {
    font-size: 20px;
    &:hover {
      color: #ffffff !important;
    }
  }
  svg {
    font-size: 20px;
  }
`;
export const FavoriteButton = styled(Button)<{ $favorite?: boolean }>`
  color: ${({ $favorite }) => ($favorite ? "#0067ff" : "#858994")} !important;
  background-color: transparent;
  &:hover {
    color: ${({ $favorite }) => ($favorite ? "#217afd" : "#ffffff")} !important;
    background-color: transparent !important;
  }
  .anticon {
    font-size: 20px;
    &:hover {
      color: ${({ $favorite }) =>
        $favorite ? "#217afd" : "#ffffff"} !important;
    }
  }
  svg {
    font-size: 20px;
  }
`;

export const CommentsList = styled(List)<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
`;
export const ButtonBack = styled(Button)`
  width: fit-content;
  border-radius: 50%;
  border: none;
  background-color: rgb(0, 84, 210);
  color: #ffffff;
  &:hover {
    background-color: #0067ff !important;
    box-shadow: rgba(26, 59, 142, 0.19) 0px 10px 20px,
      rgba(26, 59, 142, 0.23) 0px 6px 6px;
  }
  .anticon {
    font-size: 25px;
    color: #ffffff;
  }
`;
export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: rgb(34, 40, 54) !important;
    box-shadow: rgba(6, 6, 8, 0.75) 0px 54px 55px, rgba(6, 6, 8, 0.58) 0px -12px 30px, rgba(6, 6, 8, 0.4) 0px 4px 6px, rgba(6, 6, 8, 0.15) 0px 12px 13px, rgba(6, 6, 8, 0.1) 0px -3px 5px;
  }
  .ant-modal-header {
    background-color: transparent;
    border-bottom: none;
  }
  .ant-modal-title {
    background-color: transparent !important;
    text-align: center;
    color: rgb(231, 231, 231);
  }
  .ant-modal-close {
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .ant-modal-close-x {
    color: white; 
    font-size: 15px;
    line-height: 32px;
  }
`;

