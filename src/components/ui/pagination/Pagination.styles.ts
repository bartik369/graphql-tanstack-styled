import styled from "styled-components";
import { Pagination } from "antd";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledPagination = styled(Pagination)`
  .ant-pagination-item {
    border: none;
    border-radius: 4px;
    background-color: var(--color-btn-pagination);
    transition: all 0.3s;
    a {
      color: var(--color-pagination-link);
      &:hover {
        color: var(--color-pagination-link-hover);
      }
    }

    &:hover {
      color: var(--color-pagination-link-hover) !important;
      background-color: var(--color-primary) !important;
    }
  }
  .ant-pagination-item-active {
    font-weight: bold;
    background-color: var(--color-primary) !important;;
    a {
      color: var(--color-pagination-link-hover);
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    background-color: var(--color-bg-next-btn);
    span {
      color: var(--color-next-btn);
    }
    &:hover {
      span {
        color: var(--color-pagination-link-hover);
      }
    }
    &:hover {
      background-color: var(--color-primary) !important;;
    }
  }

  .ant-pagination-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: rgb(41, 48, 65);
    }
  }

  .ant-pagination-options {
    display: none;
  }
  .ant-pagination-item-container {
    .ant-pagination-item-ellipsis {
      color: rgb(121, 127, 140) !important;
    }
  }
`;
