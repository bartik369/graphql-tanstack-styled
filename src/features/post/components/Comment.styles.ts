import { Avatar, Card, Typography, Button } from "antd";
const { Text } = Typography;

import styled from "styled-components";

export const StyledCard = styled(Card)`
  border: none;
  border-radius: 12px;
  background-color: #1e232f;
  box-shadow: rgba(17, 20, 27, 0.9) 0px 11px 11px -11px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: rgba(17, 20, 27, 0.8) 0px 35px 30px -30px;
  }
  .ant-card-body {
    padding: 18px 20px 5px;
  }
`;
export const GroupedUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(38, 46, 60);
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CustomAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
  background-color: rgb(54, 63, 78);
`;
export const CustomName = styled(Text)`
  font-size: 16px;
  font-weight:600;
  color: rgb(239, 239, 239);
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const CustomEmail = styled(Text)`
  font-size: 12px;
  color: rgb(129, 134, 141);
`;
export const CustomText = styled(Text)`
  display: block;
  font-size: 12px;
  color: rgb(222, 221, 221);
  text-align: left;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CommentActions = styled.div`
  display: flex;
  gap: 6px;
`;

export const FavoriteButton = styled(Button)<{ $favorite?: boolean }>`
  color: ${({ $favorite }) => ($favorite ? "#ee3838" : "#858994")} !important;
  background-color: transparent;
  &:hover {
    color: #ee3838 !important;
    background-color: transparent !important;
  }
  .anticon,
  svg {
    font-size: 20px;
  }
`;
export const Count = styled.span`
  display: inline-block;
  min-width: 10px;
  color: #ee3838;
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