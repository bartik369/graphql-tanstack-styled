import type { PaginationProps } from "antd";
import { Pagination as AntPagination } from "antd";
import * as S from "./Pagination.styles";

const Pagination = (props: PaginationProps) => {
  return (
    <S.PaginationWrapper>
      <AntPagination {...props} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
