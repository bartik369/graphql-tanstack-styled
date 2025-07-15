import { Avatar, Button, Card } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  padding: 16px;
`;
export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  box-shadow: rgba(17, 20, 27, 0.9) 0px 20px 15px -15px;
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
  background-color: rgb(54, 63, 78);
  .anticon {
    font-size: 14px;
  }
`;

export const Title = styled.h3`
  position: relative;
  padding: 12px 0 10px;
  border-bottom: 1px solid rgb(38, 46, 60);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #f7f7f7;
  background-color: #1e232f;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const UserName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #fdfdfd;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 20px 5px;
`;
export const StyledImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  background-color: rgb(35, 41, 54);
`;
export const Text = styled.div`
  padding: 10px 20px;
  font-size: 12px;
  color: rgb(222, 221, 221);
  text-align: left;
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px 10px;
`;
export const PostActions = styled.div`
  display: flex;
  gap: 6px;
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
export const DeleteButton = styled(Button)`
  color: rgb(133, 137, 148);
  &:hover {
    color: rgb(238, 56, 56) !important;
  }
  .anticon {
    font-size: 20px;
    &:hover {
      color: rgb(238, 56, 56) !important;
    }
  }
  svg {
    font-size: 20px;
  }
`;
