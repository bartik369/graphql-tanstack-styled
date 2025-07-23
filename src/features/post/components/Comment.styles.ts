import { Avatar, Card, Typography, Button } from "antd";
const { Text } = Typography;

import styled from "styled-components";

export const StyledCard = styled(Card)`
  border: none;
  border-radius: 12px;
  background-color: var(--color-bg-card);
  box-shadow: var(--color-card-box-shadow);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: var(--color-card-box-shadow-hover);
  }
  .ant-card-body {
    padding: 18px 20px 5px;
  }
`;
export const Header = styled.h1`
  font-size: 30px;
  color: var(--color-font-primary);
  text-align: center;
  margin-bottom: 25px;
`;
export const GroupedUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--color-title-border);
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CustomAvatar = styled(Avatar)`
  flex-shrink: 0;
  height: 33px;
  width: 33px;
  background-color: var(--color-primary-avatar);
  .anticon {
    color: var(--color-avatar-icon);
  }
  svg {
    font-size: 16px;
  }
`;
export const CustomName = styled(Text)`
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-font-name);
  &::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
export const CustomEmail = styled(Text)`
  font-size: 12px;
  color: var(--color-font-ext-name);
`;
export const CustomText = styled(Text)`
  display: block;
  font-size: 12px;
  color: var(--color-font-description);
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
  color: ${({ $favorite }) =>
    $favorite ? "var( --color-delete)" : "var(--color-icon)"} !important;
  background-color: transparent;
  &:hover {
    color: var(--color-delete) !important;
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
  color: var(--color-delete);
`;

export const StyledButton = styled(Button)`
  color: var(--color-icon);
  background-color: transparent;
  &:hover {
    color: var(--color-font-primary) !important;
    background-color: transparent !important;
  }
  .anticon {
    font-size: 20px;
    &:hover {
      color: var(--color-font-primary) !important;
    }
  }
  svg {
    font-size: 20px;
  }
`;
export const DeleteButton = styled(Button)`
  color: var(--color-icon);
  &:hover {
    color: var(--color-delete) !important;
  }
  .anticon {
    font-size: 20px;
    &:hover {
      color: var(--color-delete) !important;
    }
  }
  svg {
    font-size: 20px;
  }
`;
