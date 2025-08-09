import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
const LazyTodos = lazy(() => import('@/pages/todos'));

const TodosConfig = {
  title: 'Todos',
  path: 'todos',
  element: (
    <Suspense fallback={<Spin />}>
      <LazyTodos />
    </Suspense>
  ),
  requireAuth: false,
};

export default TodosConfig;
