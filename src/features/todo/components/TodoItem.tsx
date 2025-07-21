import { DeleteOutlined } from "@ant-design/icons";
import type { TodoActions } from "../types/todo";
import type { Todo } from "@/api/graphql/generated/graphql";
import * as S from "./Todo.styles";

interface TodoItemProps {
  actions: TodoActions;
  todo: Todo;
}
const TodoItem = ({ todo, actions }: TodoItemProps) => {
  return (
    <S.CustomLIstItem>
      <S.ListItemWrapper>
        <S.CustomCheckbox
          checked={todo.completed || false}
          onClick={() => actions.updateTodo(todo.id || "")}
        />
        <S.TodoText $completed={todo.completed || false}>
          {todo.title}
        </S.TodoText>
        <S.CustomDeleteButton
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => actions.deleteTodo(todo.id || "")}
        />
      </S.ListItemWrapper>
    </S.CustomLIstItem>
  );
};

export default TodoItem;
