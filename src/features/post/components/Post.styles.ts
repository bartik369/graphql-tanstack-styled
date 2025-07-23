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
  background-color: var( --color-wrapper);
  box-shadow: var(--color-box-shadow);
`;
export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const Header = styled.h1`
  font-size: 30px;
  color: var(--color-font-primary);
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
  background-color: var(--color-bg-card);
  border: none;
  box-shadow: var(--color-card-box-shadow);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: var(--color-card-box-shadow-hover);
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
  background-color: var(--color-primary-avatar);
  .anticon {
    font-size: 14px;
    color: var(--color-avatar-icon);
  }
`;

export const Title = styled.h3`
  position: relative;
  padding: 12px 20px 10px;
  border-bottom: 1px solid var(--color-title-border);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: var(--color-font-name);
  background-color: var(--color-title-bg);
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const UserName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--color-font-name);
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
  background-color: var(--color-bg-media);
  border-radius: 6px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100px;
    margin-bottom:10px;
  }
`;
export const Text = styled.div`
  flex: 1;
  padding-left: 16px;
  font-size: 12px;
  color: var(--color-font-description);
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
  color: var(--color-icon);
  background-color: transparent;
  &:hover {
    color: var(--color-font-primary)!important;
    background-color: transparent !important;
  }
  .anticon {
    font-size: 20px;
    &:hover {
      color: var(--color-font-primary)!important;
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
  background-color: var(--color-primary);
  color: var(--color-font-primary);
  &:hover {
    background-color: var(--color-primary) !important;
    box-shadow: var(--color-btn-back-box-shadow);
  }
  .anticon {
    font-size: 25px;
    color: var(--color-font);
  }
`;
export const CustomModal = styled(Modal)`

  .ant-modal-content {
    background-color: var(--color-bg-modal-primary) !important;
  }
  .ant-modal-header {
    background-color: transparent;
    border-bottom: none;
  }
  .ant-modal-title {
    background-color: transparent !important;
    text-align: center;
    color: var(--color-font-name);
  }
  .ant-modal-close {
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--color-bg-btn-modal-close);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--color-bg-btn-modal-close-hover);
    }
  }

  .ant-modal-close-x {
    color: var(--color-font-primary); 
    font-size: 15px;
    line-height: 32px;
  }
`;

