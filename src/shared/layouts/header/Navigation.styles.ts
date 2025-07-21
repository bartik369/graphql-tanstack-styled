import { Menu } from "antd";
import styled from "styled-components";

export const CustomMenu = styled(Menu)`
  padding: 5px 10px;
  border: none;
  background-color: transparent;

  .ant-menu-item,
  .ant-menu-item a {
    color: rgb(203, 203, 203);
  }

  .ant-menu-item:hover,
  .ant-menu-item:hover a {
    color: #0067ff;
    background-color: transparent;
  }

  .ant-menu-item-selected,
  .ant-menu-item-selected a {
    color: #0067ff !important;
  }

  .ant-menu-item-selected:hover,
  .ant-menu-item-selected:hover a {
    color: #0067ff !important;
  }
`;
