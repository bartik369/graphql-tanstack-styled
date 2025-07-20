import { Button, Checkbox, Input, List } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  max-width: 450px;
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

export const Header = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 25px;
`;

export const CustomLIstItem = styled(List.Item)`
  height: 60px;
  border: none !important;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 8px 14px;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: #1e232f;
  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: rgb(34, 40, 53);
    box-shadow: rgba(9, 9, 9, 0.45) 0px 25px 20px -20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled(Input)`
  padding: 12px 14px;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  border: 2px solid rgb(44, 52, 68);
  background-color: rgb(32, 38, 50);
  color: #fbffff;
  &:hover {
    background-color: rgb(50, 57, 68);
    border-color: #0067ff;
  }
  &:focus {
    background-color: rgb(50, 57, 68);
    outline: none;
    border-color: #0067ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  &::placeholder {
    color: #6d737a;
  }
`;

export const AddButton = styled(Button)`
  padding: 0 11px;
  height: 47px;
  color: #ffffff;
  font-size: 12px;
  background-color: #333842;
  border: none !important;
  &:hover {
    color: #ffffff !important;
    background-color: #0067ff !important;
    border: none !important;
  }
  &:disabled {
    background-color: #333842 !important;
    color: #686d76;
  }
  &:disabled:hover {
    color: #686d76 !important;
  }
`;
export const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ $completed }) => ($completed ? "#555a64" : "#f5f7f9")};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  font-size: 13px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const StyledButton = styled(Button)<{ $isActive?: boolean }>`
  &&.ant-btn {
    background-color: ${({ $isActive }) => ($isActive ? "#0067ff" : "#222835")};
    color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#9aa1b1")};
    border: none;
    height: 40px;
    font-size: 13px;
    padding: 0 16px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ $isActive }) =>
        $isActive ? "#0051cc" : "#293041"};
      color: #ffffff;
    }
  }
`;

export const ActiveButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? "#999999" : "#222222")};
`;
export const CustomDeleteButton = styled(Button)`
  .anticon {
    font-size: 18px !important;
    color: rgb(133, 137, 148);
    transition: all 0.3s;
  }
  &:hover {
    .anticon {
      font-size: 18px !important;
      color: rgb(238, 56, 56);
    }
  }
`;

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #323741;
    border: 1px solid #4e525a;
    transition: all 0.3s;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #0067ff;
    border-color: #0067ff;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    top: 9.5px;
    left: 6px;
    height: 10px;
    width: 6px;
    border-color: #fff;
  }

  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #0067ff;
  }

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #0067ff;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
  .ant-empty-description {
    color: rgb(41, 49, 65);
    font-size: 14px;
  }
`;
export const StyledIcon = styled(InboxOutlined)`
  font-size: 80px;
  color: #293141;
`;
