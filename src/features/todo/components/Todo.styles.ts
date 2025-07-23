import { Button, Checkbox, Input, List } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  max-width: 450px;
  min-width: 300px;
  margin: 20px 30px 100px;
  padding: 35px;
  border-radius: 30px;
  background-color: var(--color-wrapper);
  box-shadow:var(--color-box-shadow);
`;

export const Header = styled.h1`
  font-size: 30px;
  color: var(--color-font-primary);
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
  background-color: var(--color-bg-card);
  transition: background-color 0.15s ease-in;
  &:hover {
    background-color: var(--color-bg-card-hover);
    box-shadow: var(--color-card-box-shadow);
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
  border: 2px solid var(--color-border-input);
  background-color: var(--color-bg-input);
  color: var(--color-font-primary);
  &:hover {
    background-color: var(--color-bg-input-hover);
    border-color: var(--color-primary);
  }
  &:focus {
    background-color: var(--color-bg-input-hover);
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--color-input-box-shadow);
  }
  &::placeholder {
    color: var(--color-font-ext-name);
  }
`;

export const AddButton = styled(Button)`
  padding: 0 11px;
  height: 47px;
  color: var(--color-font-primary-btn);
  font-size: 12px;
  background-color: var(--color-bg-primary-btn);
  border: none !important;
  &:hover {
    color: var(--color-font-primary-btn) !important;
    background-color: var(--color-primary) !important;
    border: none !important;
  }
  &:disabled {
    background-color: var(--color-bg-primary-btn-disabled) !important;
    color: var(--color-font-not-active);
  }
  &:disabled:hover {
    color: var(--color-font-not-active) !important;
  }
`;
export const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ $completed }) => ($completed 
    ? "var(--color-crossed)" 
    : "var(--color-font-description)")
  };
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
    background-color: ${({ $isActive }) => ($isActive 
      ? "var(--color-primary)" 
      : "var(--color-bg-primary-btn)")
    };
    color: ${({ $isActive }) => ($isActive 
      ? "var(--color-font)" 
      : "var(--color-font)")
    };
    border: none;
    height: 40px;
    font-size: 13px;
    padding: 0 16px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ $isActive }) =>
        $isActive 
          ? "var(--color-primary-hover)" 
          : "var(--color-bg-primary-btn-hover)"
        };
      color: var(--color-font);
    }
  }
`;

export const CustomDeleteButton = styled(Button)`
background-color: transparent !important;
  .anticon {
    font-size: 18px !important;
    color: var(--color-icon);
    transition: all 0.3s;
  }
  &:hover {
    .anticon {
      font-size: 18px !important;
      color: var(--color-delete);
    }
  }
`;

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-checkbox);
    border: 1px solid var(--color-checkbox-border);
    transition: all 0.3s;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    top: 9.5px;
    left: 6px;
    height: 10px;
    width: 6px;
    border-color: var(--color-font-check);
  }

  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: var(--color-primary);
  }

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--color-primary);
  }
  .ant-checkbox-checked:hover .ant-checkbox-inner {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}
`;
