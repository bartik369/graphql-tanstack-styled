import type { PaginationProps } from "antd";
import * as S from "./Pagination.styles";

type CustomPaginationProps = PaginationProps & {
  isPlaceholderData?: boolean;
}
const Pagination = ({ isPlaceholderData, ...props} : CustomPaginationProps) => {
  return (
    <S.PaginationWrapper>
      <S.StyledPagination {...props} disabled={isPlaceholderData || props.disabled} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
