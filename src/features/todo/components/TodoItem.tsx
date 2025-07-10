import { List, Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as S from "./Todo.styles";
import type { Todo } from "@/api/graphql/generated/hooks";

interface TodoItemProps {
  todo: Todo;
  toggle: (id: string) => void;
  remove: (id: string) => void;
}
const TodoItem = ({ todo, toggle, remove }: TodoItemProps) => {
  return (
    <List.Item>
      <S.ListItemWrapper>
        <Checkbox checked={todo.completed || false} onClick={() => toggle(todo.id || '')} />
        <S.TodoText $completed={todo.completed || false}>{todo.title}</S.TodoText>
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => remove(todo.id || "")}
        />
      </S.ListItemWrapper>
    </List.Item>
  );
};

export default TodoItem;
