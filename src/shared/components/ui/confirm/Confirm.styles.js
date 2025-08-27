import { createGlobalStyle } from "styled-components";
export const CustomConfirmStyles = createGlobalStyle `
  .custom-confirm {
    .ant-popover-inner {
      background-color: var(--color-bg-toast);
    }
    .ant-popconfirm-title {
      color: var(--color-font-name)!important;;
      font-weight: bold;
    }
    .ant-popconfirm-description {
      color: var(--color-font-description) !important;
    }
    .ant-btn-primary {
      background-color: var(--color-delete);
      font-size: 11px;
      &:hover {
        background-color: var(--color-delete-hover) !important;
      }
    }
    .ant-btn-default {
      background-color: var(--color-bg-primary-btn);
      color: #fff !important;
      border: none !important;
      font-size: 11px;
      &:hover {
        background-color: var(--color-bg-primary-btn-hover) !important;
        border: none !important;
      }
    }
    .ant-popover-arrow::before {
    background: var(--color-bg-toast);
    box-shadow: none;
  }
  }

`;
