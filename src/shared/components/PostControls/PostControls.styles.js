import { Button } from "antd";
import styled from "styled-components";
export const PostControls = styled.div `
  display: flex;
  gap: 6px;
`;
export const StyledButton = styled(Button) `
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
export const DeleteButton = styled(Button) `
  color: var(--color-icon);
  &:hover {
    color: var(--color-delete) !important;
    background-color: transparent !important;
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
