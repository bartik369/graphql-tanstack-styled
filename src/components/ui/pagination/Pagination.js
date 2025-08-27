import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./Pagination.styles";
const Pagination = ({ isPlaceholderData, ...props }) => {
    return (_jsx(S.PaginationWrapper, { children: _jsx(S.StyledPagination, { ...props, disabled: isPlaceholderData || props.disabled }) }));
};
export default Pagination;
