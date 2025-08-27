import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { List, Spin } from "antd";
import TodoItem from "./TodoItem";
import Pagination from "@/components/ui/pagination/Pagination";
import NoData from "@/shared/components/ui/nodata/NoData";
import { useTodos } from "@/api/hooks/useTodo";
import { PLACEHOLDERS } from "@/shared/constants/placeholders";
import { BUTTONS_LABELS } from "@/shared/constants/buttons";
import { TITLES } from "@/shared/constants/titles";
import { MESSAGES } from "@/shared/constants/messages";
import { PAGE_SIZE_OPTIONS } from "@/shared/constants/pagination";
import { STATUS } from "../types/todo";
import { StyledToastContainer } from "@/shared/styles/ToastStyles";
import * as S from "./Todo.styles";
const TodoList = () => {
    const { state, actions, setters, } = useTodos();
    return (_jsxs(S.Wrapper, { children: [_jsx(StyledToastContainer, { position: "top-center" }), _jsx(S.Header, { children: TITLES.todo }), _jsxs(S.InputGroup, { children: [_jsx(S.StyledInput, { value: state.todoTitle, placeholder: PLACEHOLDERS.todoTitle, onChange: (e) => actions.handleInputChange(e.target.value) }), _jsx(S.AddButton, { disabled: !state.todoTitle.length, onClick: actions.createTodo, children: BUTTONS_LABELS.add })] }), state.isLoading ? (_jsx(Spin, { tip: MESSAGES.loading, size: "large" })) : state.fetchError ? (_jsx("span", { children: MESSAGES.errorFetchData })) : !state?.todos.length ? (_jsx(NoData, {})) : (_jsx(List, { children: state?.todos
                    ?.filter((todo) => todo != undefined)
                    .map((todo) => (_jsx(TodoItem, { actions: actions, todo: todo }, todo.id))) })), _jsxs(S.ButtonsGroup, { children: [_jsx(S.StyledButton, { "$isActive": state.activeButton === STATUS.all, onClick: () => setters.setActiveButton(STATUS.all), children: BUTTONS_LABELS.all }), _jsx(S.StyledButton, { "$isActive": state.activeButton === STATUS.completed, onClick: () => setters.setActiveButton(STATUS.completed), children: BUTTONS_LABELS.done })] }), _jsx(Pagination, { pageSize: state.pageSize, current: state.page, total: state.totalCount ?? 0, pageSizeOptions: PAGE_SIZE_OPTIONS, isPlaceholderData: state.isPlaceholderData, onChange: (page, pageSize) => {
                    setters.setPage(page);
                    setters.setPageSize(pageSize);
                } })] }));
};
export default TodoList;
