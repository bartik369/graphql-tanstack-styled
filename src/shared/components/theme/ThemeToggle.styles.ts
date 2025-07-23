import { Switch } from "antd";
import styled from "styled-components";

export const CustomSwitch = styled(Switch)`
  display: flex;
  align-items: center;
  width: 50px;
  height: 27px;
  line-height: 27px;
  padding: 5px 2px;

  .ant-switch-handle {
    top: 50%;
    transform: translateY(-50%);
    left:5px;
    transition: left 0.3s;
    margin-right: 10px;
  }

  &.ant-switch-checked .ant-switch-handle {
    left: calc(100% - 5px - 18px);
  }

  .anticon {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 17px;
    height: 100%;
    &:hover {
      color: var(--color-font-primary) !important;
    }
  }
`;
