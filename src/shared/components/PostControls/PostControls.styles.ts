import { Button } from "antd";
import styled from "styled-components";

export const PostControls = styled.div`
  display: flex;
  gap: 6px;
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
