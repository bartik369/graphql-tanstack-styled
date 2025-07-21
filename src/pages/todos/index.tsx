import TodoList from '@/features/todo/components/TodoList';
import PageLayout from '@/shared/layouts/page-layout';

const TodoPage = () => {
    return (
        <>
        <PageLayout>
            <TodoList />
        </PageLayout>     
        </>
    );
};

export default TodoPage;