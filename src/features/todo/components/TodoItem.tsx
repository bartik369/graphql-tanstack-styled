import { List, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as S from "./Todo.styles";
import type { Todo } from "@/api/graphql/generated/hooks";
import type { TodoActions } from "../types/todo";

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
        onClick={() => actions.updateTodo(todo.id || '')}
    />
        <S.TodoText $completed={todo.completed || false}>{todo.title}</S.TodoText>
        <Button
          type="text"
          danger
          size="large"
          icon={<DeleteOutlined />}
          onClick={() => actions.deleteTodo(todo.id || "")}
        />
      </S.ListItemWrapper>
    </S.CustomLIstItem>
  );
};

export default TodoItem;
