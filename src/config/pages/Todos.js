import { jsx as _jsx } from "react/jsx-runtime";
import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
const LazyTodos = lazy(() => import('@/pages/todos'));
const TodosConfig = {
    title: 'Todos',
    path: 'todos',
    element: (_jsx(Suspense, { fallback: _jsx(Spin, {}), children: _jsx(LazyTodos, {}) })),
    requireAuth: false,
};
export default TodosConfig;
