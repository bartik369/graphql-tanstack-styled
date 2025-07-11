import { useTodos } from "@/api/hooks/useTodo";
import { Input, Button, List } from "antd";
import type { Todo } from "@/api/graphql/generated/hooks";
import { PLACEHOLDERS } from "@/shared/constants/placeholders";
import { BUTTONS_LABELS } from "@/shared/constants/buttons";
import TodoItem from "./TodoItem";
import * as S from "./Todo.styles";
import Pagination from "@/components/ui/pagination/Pagination";

const TodoList = () => {
  const { state, actions, setters } = useTodos();
  return (
    <S.Wrapper>
      <S.Header>Todo</S.Header>
      <S.InputGroup>
        <Input
          value={state.todoTitle}
          size="large"
          placeholder={PLACEHOLDERS.todoTitle}
          onChange={(e) => actions.handleInputChange(e.target.value)}
        />
        <S.AddButton
          disabled={!state.todoTitle.length}
          onClick={actions.createTodo}
        >
          {BUTTONS_LABELS.add}
        </S.AddButton>
      </S.InputGroup>
      <List>
        {state?.todos
          ?.filter((todo): todo is Todo => todo != undefined)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              actions={actions}
              todo={todo}
            />
          ))}
      </List>
      <S.ButtonsGroup>
        <Button
          type={state.activeButton === "all" ? "primary" : "default"}
          onClick={() => setters.setActiveButton("all")}
        >
          {BUTTONS_LABELS.all}
        </Button>
        <Button
          type={state.activeButton === "completed" ? "primary" : "default"}
          onClick={() => setters.setActiveButton("completed")}
        >
          {BUTTONS_LABELS.done}
        </Button>
      </S.ButtonsGroup>
      <Pagination
        pageSize={state.pageSize}
        current={state.page}
        total={state.totalCount ?? 0}
        pageSizeOptions={['5', '10', '15', '20', '50']}
        onChange={(page, pageSize) =>  {
          setters.setPage(page)
          setters.setPageSize(pageSize)
        }}
      />
    </S.Wrapper>
  );
};

export default TodoList;
