import { jsx as _jsx } from "react/jsx-runtime";
import TodoList from '@/features/todo/components/TodoList';
import * as S from './Todos.styles';
const Todos = () => {
    return (_jsx(S.TodosWrapper, { children: _jsx(TodoList, {}) }));
};
export default Todos;
