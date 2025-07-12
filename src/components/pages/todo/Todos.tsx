import TodoList from '@/features/todo/components/TodoList';
import * as S from './Todos.styles'

const Todos = () => {
  return (
    <S.TodosWrapper>
      <TodoList />
    </S.TodosWrapper>
  );
};

export default Todos;
