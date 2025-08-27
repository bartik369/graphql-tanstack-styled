import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DeleteOutlined } from "@ant-design/icons";
import { MESSAGES } from "@/shared/constants/messages";
import { TITLES } from "@/shared/constants/titles";
import * as S from "./Todo.styles";
import { CustomConfirm } from "@/shared/components/ui/confirm/CustomConfirm";
const TodoItem = ({ todo, actions }) => {
    return (_jsx(S.CustomLIstItem, { children: _jsxs(S.ListItemWrapper, { children: [_jsx(S.CustomCheckbox, { checked: todo.completed || false, onClick: () => actions.updateTodo(todo.id || "") }), _jsx(S.TodoText, { "$completed": todo.completed || false, children: todo.title }), _jsx(CustomConfirm, { title: TITLES.DELETE_TODO_TITLE, description: MESSAGES.DELETE_ITEM, onConfirm: () => actions.deleteTodo(todo.id || ""), okText: MESSAGES.YES, cancelText: MESSAGES.NO, children: _jsx(S.CustomDeleteButton, { type: "text", icon: _jsx(DeleteOutlined, {}) }) })] }) }));
};
export default TodoItem;
