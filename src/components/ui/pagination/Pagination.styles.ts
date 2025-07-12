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
    background-color: rgb(34, 40, 53);
    transition: all 0.3s;
    a {
      color: rgb(121, 127, 140);
      &:hover {
        color: #ffffff;
      }
    }

    &:hover {
      color: #ffffff !important;
      background-color: #0067ff !important;
    }
  }
  .ant-pagination-item-active {
    font-weight: bold;
    background-color: #0067ff;
    a {
      color: #ffffff;
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    background-color: rgb(41, 48, 65);
    span {
      color: rgb(154, 161, 177);
    }
    &:hover {
      span {
        color: #ffffff;
      }
    }
    &:hover {
      background-color: #0067ff;
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
