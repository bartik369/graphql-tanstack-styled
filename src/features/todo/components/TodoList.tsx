import { List, Spin, Empty } from "antd";
import TodoItem from "./TodoItem";
import Pagination from "@/components/ui/pagination/Pagination";
import { useTodos } from "@/api/hooks/useTodo";
import type { Todo } from "@/api/graphql/generated/hooks";
import { STATUS } from "../types/todo";
import { PLACEHOLDERS } from "@/shared/constants/placeholders";
import { BUTTONS_LABELS } from "@/shared/constants/buttons";
import { TITLES } from "@/shared/constants/titles";
import { MESSAGES } from "@/shared/constants/messages";
import { PAGE_SIZE_OPTIONS } from "@/shared/constants/pagination";
import { StyledToastContainer } from "@/shared/styles/ToastStyles";
import * as S from "./Todo.styles";

const TodoList = () => {
  const { state, actions, setters } = useTodos();
  return (
    <S.Wrapper>
      <StyledToastContainer position="top-center" />
      <S.Header>{TITLES.todo}</S.Header>
      <S.InputGroup>
        <S.StyledInput
          value={state.todoTitle}
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
      {state.isLoading ? (
        <Spin tip={MESSAGES.loading} size="large" />
      ) : state.fetchError ? (
        <span>{MESSAGES.errorFetchData}</span>
      ) : !state?.todos.length ? (
        <S.WrapperInfo>
          <Empty description={MESSAGES.noData} image={<S.StyledIcon />} />
        </S.WrapperInfo>
      ) : (
        <List>
          {state?.todos
            ?.filter((todo): todo is Todo => todo != undefined)
            .map((todo) => (
              <TodoItem key={todo.id} actions={actions} todo={todo} />
            ))}
        </List>
      )}
      <S.ButtonsGroup>
        <S.StyledButton
          $isActive={state.activeButton === STATUS.all}
          onClick={() => setters.setActiveButton(STATUS.all)}
        >
          {BUTTONS_LABELS.all}
        </S.StyledButton>
        <S.StyledButton
          $isActive={state.activeButton === STATUS.completed}
          onClick={() => setters.setActiveButton(STATUS.completed)}
        >
          {BUTTONS_LABELS.done}
        </S.StyledButton>
      </S.ButtonsGroup>
      <Pagination
        pageSize={state.pageSize}
        current={state.page}
        total={state.totalCount ?? 0}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        onChange={(page, pageSize) => {
          setters.setPage(page);
          setters.setPageSize(pageSize);
        }}
      />
    </S.Wrapper>
  );
};

export default TodoList;
