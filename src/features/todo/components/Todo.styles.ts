import { Button, Checkbox, Input, List } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 30px;
  background-color: #232832;
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px,
    rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.04) 0px 6px 6px -3px,
    rgba(14, 63, 126, 0.04) 0px 12px 12px -6px,
    rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
`;
export const Header = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`;

export const CustomLIstItem = styled(List.Item)`
  height: 60px;
  border: none !important;
`;

export const StyledInput = styled(Input)`
  padding: 12px 14px;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid rgb(43, 49, 59);
  background-color: #272d36;
  color: #fbffff;
  &:hover {
    background-color: rgb(50, 57, 68);
    border-color: #40a9ff;
  }
  &:focus {
    background-color: rgb(50, 57, 68);
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  &::placeholder {
    color: #6d737a;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 20px;
`;
export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px 14px;
  border-radius: 8px;
  background-color: #323741;
`;
export const AddButton = styled(Button)`
  padding: 0 11px !important;
  height: 48px !important;
  color: #ffffff;
  font-size: 12px;
  background-color: #333842;
  border: none !important;
  &:hover {
    color: #ffffff !important;
    background-color: #1e5fff !important;
    border: none !important;
  }
  &:disabled {
    background-color: #333842 !important;
    color: #686d76;
  }
`;
export const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ $completed }) => ($completed ? "#555a64" : "#cbcdd1")};
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
export const ActiveButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? "#999999" : "#222222")};
`;

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    width: 19px;
    height: 19px;
    border-radius: 3px;
    background-color: #323741;
    border: 2px solid #4e525a;
    transition: all 0.3s;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #1e5fff;
    border-color: #1e5fff;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #fff;
    top: 9px;
    height: 10px;
    width: 6px;
  }

  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #1e5fff;
  }

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #1e5fff;
  }
`;
