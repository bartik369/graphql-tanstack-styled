import { useCallback, useMemo, useReducer } from "react";
import { v4 as uuid } from "uuid";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useGetTodosQuery,
} from "../graphql/generated/hooks";
import { queryClient } from "@/lib/queryClient";
import { toast } from "react-toastify";
import type { GetTodosQuery, Todo } from "../graphql/generated/graphql";
import { initialTodoState, todoReducer } from "@/features/todo/model/TodoReducer";
import { TodoActionTypes } from "@/features/todo/model/TodoTypes";
import { TOAST_MESSAGES } from "@/features/todo/constants/toastMessages";
import { getErrorMessage } from "@/shared/utils/getErrorMessage";
import { OperatorKindEnum } from "../graphql/generated/graphql";
import { STATUS, type Status } from "@/features/todo/types/todo";

export function useTodos() {
  const [state, dispatch] = useReducer(todoReducer ,initialTodoState)
  const {
    data,
    isLoading,
    error: fetchError,
  } = useGetTodosQuery({
    options: {
      paginate: { page: state.page, limit: state.pageSize },
      ...(state.activeButton === STATUS.completed && {
        operators: [
          {
            field: 'completed',
            kind: OperatorKindEnum.Like,
            value: 'true',
          },
        ],
      }),
    },
  });
  const dataKey = useMemo(() => [
    "GetTodos",
    { options: { paginate: { page: state.page, limit: state.pageSize } } }
  ], [state.page, state.pageSize]);
  
  const createTodoMutation = useCreateTodoMutation({
    onMutate: async ({ input }) => {
      dispatch({ type: TodoActionTypes.RESET_ERROR });
      await queryClient.cancelQueries({ queryKey: dataKey });
      const previousData = queryClient.getQueryData<GetTodosQuery>(dataKey);
      const previousTodo = previousData?.todos ?? [];

      queryClient.setQueryData(dataKey, (oldData?: any) => {
        if (!oldData?.todos?.data) return oldData;
        return {
          ...oldData,
          todos: {
            ...oldData.todos,
            data: [{ id: uuid(), ...input }, ...(oldData?.todos?.data ?? [])],
          },
        };
      });
      return { previousTodo };
    },
    onError: (err, _variables, context) => {
      dispatch({
        type: TodoActionTypes.SET_ERROR,
        payload: (err as Error).message
      });
      toast((err as Error).message);

      if (context?.previousTodo) {
        queryClient.setQueryData(dataKey, {
          todos: context.previousTodo,
        });
      }
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.added);
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // },
  });

  const updateTodoMutation = useUpdateTodoMutation({
    onMutate: async ({ id }) => {
      dispatch({ type: TodoActionTypes.RESET_ERROR });

      await queryClient.cancelQueries({ queryKey: dataKey });

      const previousData = queryClient.getQueryData<GetTodosQuery>(dataKey);
      queryClient.setQueryData(dataKey, (oldData?: any) => {
        if (!oldData?.todos?.data) return oldData;
        return {
          ...oldData,
          todos: {
            ...oldData.todos,
            data: oldData?.todos.data.map((todo: Todo) => todo.id === id
            ? {...todo, completed: !todo.completed}
            : todo
          )
          }
        }
      });
      return { previousTodos: previousData?.todos ?? [] };
    },

    onError: async (err, _variables, context) => {
      dispatch({
        type: TodoActionTypes.SET_ERROR,
        payload: (err as Error).message
      });
      toast.error(getErrorMessage(err));
      if (context?.previousTodos) {
        queryClient.setQueryData(dataKey, {
          todos: context.previousTodos,
        });
      }
    },
    onSuccess: async () => {
      toast.success(TOAST_MESSAGES.updated);
    },
    // onSettled: async () => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // },
  });

  const deleteMutation = useDeleteTodoMutation({
    onMutate: async ({ id }) => {
      dispatch({ type: TodoActionTypes.RESET_ERROR });
      await queryClient.cancelQueries({ queryKey: dataKey });
      const previousData = queryClient.getQueryData<GetTodosQuery>(dataKey);
      queryClient.setQueryData(dataKey, (oldData?: any) => {
        if (!oldData?.todos?.data) return oldData;
        return {
          ...oldData,
          todos: {
            ...oldData.todos,
            data: oldData.todos.data.filter((item: Todo) => item.id !== id)
          }
        }
      });
      return { previousTodos: previousData?.todos ?? [] };
    },
    onError: (err, _variables, context) => {
      toast.error(getErrorMessage(err));
      dispatch({
        type: TodoActionTypes.SET_ERROR,
        payload: (err as Error).message
      });
      if (context?.previousTodos) {
        queryClient.setQueryData(dataKey, {
          todos: context.previousTodos,
        });
      }
    },
    onSuccess: () => {
      toast.success(TOAST_MESSAGES.deleted);
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // },
  });

  const createTodo = useCallback(async () => {
    if (!state.todoTitle) return;
    await createTodoMutation.mutateAsync({ input: { title: state.todoTitle, completed: false} });
    dispatch({ type: TodoActionTypes.RESET_TODO_TITLE });
  }, [createTodoMutation, state.todoTitle]);

  const updateTodo = useCallback(
    async (id: string) => {
      const currentTodos = queryClient.getQueryData<GetTodosQuery>(dataKey);
      const todo = currentTodos?.todos?.data?.find((item) => item?.id === id);
      const completed = todo?.completed;
      await updateTodoMutation.mutateAsync({
        id,
        input: {
          completed: !completed
        }
      });
    },
    [updateTodoMutation, dataKey]
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      await deleteMutation.mutateAsync({ id });
    },
    [deleteMutation]
  );
  const handleInputChange = (value: string) => {
    dispatch({
      type: TodoActionTypes.SET_TODO_TITLE,
      payload: value
    });
  }
   

  return {
    state: {
      todos: data?.todos?.data ?? [],
      todoTitle: state.todoTitle,
      totalCount: data?.todos?.meta?.totalCount,
      page: state.page,
      pageSize: state.pageSize,
      activeButton: state.activeButton,
      activeTodo: state.activeTodo,
      mutationError: state.mutationError,
      isLoading,
      fetchError,
    },
    actions: {
      createTodo,
      updateTodo,
      deleteTodo,
      handleInputChange,
    },
    dispatch,
    setters: {
      setActiveTodo: (todo: string) => dispatch({ 
        type: TodoActionTypes.SET_ACTIVE_TODO,
        payload: todo,
      }),
      setActiveButton: (button: Status) => dispatch({
        type: TodoActionTypes.SET_ACTIVE_BUTTON,
        payload: button,
      }),
      setPage: (page: number) => dispatch({
        type: TodoActionTypes.SET_PAGE,
        payload: page,
      }),
      setPageSize: (pageSize: number) => dispatch({
        type: TodoActionTypes.SET_PAGESIZE,
        payload: pageSize,
      }),
    },
  };
}
