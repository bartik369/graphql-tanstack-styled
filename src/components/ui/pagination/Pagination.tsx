import type { PaginationProps } from "antd";
import * as S from "./Pagination.styles";

const Pagination = (props: PaginationProps) => {
  return (
    <S.PaginationWrapper>
      <S.StyledPagination {...props} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
