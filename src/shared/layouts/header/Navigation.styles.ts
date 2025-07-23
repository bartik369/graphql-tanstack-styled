import { Menu } from "antd";
import styled from "styled-components";

export const CustomMenu = styled(Menu)`
  padding: 5px 10px;
  border: none;
  background-color: transparent;

  .ant-menu-item,
  .ant-menu-item a {
    color: var(--color-font-menu);
  }

  .ant-menu-item:hover,
  .ant-menu-item:hover a {
    color: var(--color-font-active);
    background-color: transparent;
  }

  .ant-menu-item-selected,
  .ant-menu-item-selected a {
    color: var(--color-font-active) !important;
  }

  .ant-menu-item-selected:hover,
  .ant-menu-item-selected:hover a {
    color: var(--color-font-active) !important;
  }
  .ant-menu-item::after {
    display: none !important;
  }

  .ant-menu-item-selected a {
    position: relative;
  }

  .ant-menu-item-selected a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-font-active)
  }

`;
