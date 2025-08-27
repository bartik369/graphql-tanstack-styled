import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import TodoList from '@/features/todo/components/TodoList';
import PageLayout from '@/shared/layouts/page-layout';
const TodoPage = () => {
    return (_jsx(_Fragment, { children: _jsx(PageLayout, { children: _jsx(TodoList, {}) }) }));
};
export default TodoPage;
