import { Avatar, Button, Card } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  max-width: 600px;
  min-width: 300px;
  margin: 40px 20px;
  padding: 35px;
  border-radius: 30px;
  background-color: #161a22;
  box-shadow: 0 4px 4px 0 rgba(45, 51, 68, 0.2),
    0 8px 8px 0 rgba(36, 42, 59, 0.2), 0 16px 16px 0 rgba(37, 44, 61, 0.2),
    0 32px 32px 0 rgba(37, 44, 61, 0.2), 0 64px 64px 0 rgba(37, 44, 61, 0.2),
    0 128px 128px 0 rgba(37, 44, 61, 0.2);
`;
export const GroupList = styled.div<{$isOpen: boolean}>`
  display: ${({ $isOpen}) => ($isOpen ? 'none' : 'flex')};
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
  background-color: rgb(54, 63, 78);
  .anticon {
    font-size: 14px;
    color:rgb(231, 231, 231);
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
  color:rgb(231, 231, 231);
  background-color: #1e232f;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const UserName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color:rgb(231, 231, 231);
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

export const CommentsList = styled(List)<{$isOpen: boolean}>`
display: ${({ $isOpen}) => ($isOpen ? 'flex' : 'none')};
`
export const ButtonBack = styled(Button)`
width: fit-content;
border: 2px solid rgb(22, 111, 244);
border-radius: 50%;
background-color:rgb(0, 84, 210);
color: #ffffff;
&:hover {
  background-color: #0067ff !important;
  box-shadow: rgba(26, 59, 142, 0.19) 0px 10px 20px, rgba(26, 59, 142, 0.23) 0px 6px 6px;
}
.anticon {
  font-size: 25px;
  color: #ffffff;
}
`
