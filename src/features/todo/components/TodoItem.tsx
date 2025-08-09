import { DeleteOutlined } from "@ant-design/icons";
import type { TodoActions } from "../types/todo";
import type { Todo } from "@/api/graphql/generated/graphqlzero/types";
import { MESSAGES } from "@/shared/constants/messages";
import { TITLES } from "@/shared/constants/titles";
import * as S from "./Todo.styles";
import { CustomConfirm } from "@/shared/components/ui/confirm/CustomConfirm";

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
        <CustomConfirm
          title={TITLES.DELETE_TODO_TITLE}
          description={MESSAGES.DELETE_ITEM}
          onConfirm={() => actions.deleteTodo(todo.id || "")}
          okText={MESSAGES.YES}
          cancelText={MESSAGES.NO}
        >
          <S.CustomDeleteButton type="text" icon={<DeleteOutlined />} />
        </CustomConfirm>
      </S.ListItemWrapper>
    </S.CustomLIstItem>
  );
};

export default TodoItem;
