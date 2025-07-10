import { useCallback, useMemo, useState } from "react";
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

export function useTodos() {
  const [mutationError, setMutationError] = useState<string | null>(null);
  const [todoTitle, setTodoTitle] = useState("");
  const [activeTodo, setActiveTodo] = useState("");
  const [activeButton, setActiveButton] = useState<"all" | "completed">("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const {
    data,
    isLoading,
    error: fetchError,
  } = useGetTodosQuery({
    options: {
      paginate: { page, limit: pageSize },
    },
  });
  const dataKey = useMemo(() => ["GetTodos", { options: { paginate: { page: 1, limit: pageSize } } }], []);
  
  const createTodoMutation = useCreateTodoMutation({
    onMutate: async ({ input }) => {
      setMutationError(null);
      await queryClient.cancelQueries({ queryKey: dataKey });
      const previousData = queryClient.getQueryData<GetTodosQuery>([
        dataKey,
      ]);
      const previousTodo = previousData?.todos ?? [];

      queryClient.setQueryData(dataKey, (oldData?: any) => {
        if (!oldData?.todos?.data) return oldData;
        return {
          ...oldData,
          todos: {
            ...oldData.todos,
            data: [...(oldData?.todos?.data ?? []), { id: uuid(), ...input }],
          },
        };
      });
      return { previousTodo };
    },
    onError: (err, _variables, context) => {
      setMutationError((err as Error).message);
      toast((err as Error).message);

      if (context?.previousTodo) {
        queryClient.setQueryData(dataKey, {
          todos: context.previousTodo,
        });
      }
    },
    onSuccess: () => {
      toast.success("Задача добавлена!");
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // },
  });

  const updateTodoMutation = useUpdateTodoMutation({
    onMutate: async ({ id }) => {
      setMutationError(null);

      await queryClient.cancelQueries({ queryKey: dataKey });

      const previousData = queryClient.getQueryData<GetTodosQuery>([
        dataKey,
      ]);
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
      setMutationError((err as Error).message);
      toast.error("Something went wrong");
      if (context?.previousTodos) {
        queryClient.setQueryData(dataKey, {
          todos: context.previousTodos,
        });
      }
    },
    onSuccess: async () => {
      toast.success("Todo updated");
    },
    // onSettled: async () => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // },
  });

  const deleteMutation = useDeleteTodoMutation({
    onMutate: async ({ id }) => {
      setMutationError(null);
      await queryClient.cancelQueries({ queryKey: dataKey });
      const previousData = queryClient.getQueryData<GetTodosQuery>([
        dataKey,
      ]);
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
      toast.error("Something went wrong");
      setMutationError((err as Error).message);
      if (context?.previousTodos) {
        queryClient.setQueryData(dataKey, {
          todos: context.previousTodos,
        });
      }
    },
    onSuccess: () => {
      toast.success("Todo deleted");
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: dataKey });
    // },
  });

  const createTodo = useCallback(async () => {
    if (!todoTitle) return;
    await createTodoMutation.mutateAsync({ input: { title: todoTitle, completed: false} });
    setTodoTitle("");
  }, [createTodoMutation, todoTitle]);

  const updateTodo = useCallback(
    async (id: string) => {
      const currentTodos = queryClient.getQueryData<GetTodosQuery>(dataKey);
      const todo = currentTodos?.todos?.data?.find((item: Todo) => item.id === id);
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
   
  const filteredTodos = useMemo(() => {
    if (activeButton === 'completed') {
      return data?.todos?.data?.filter((todo) => todo?.completed)
    }
    return data?.todos?.data
  }, [activeButton, data?.todos?.data]);

  return {
    state: {
      todos: filteredTodos ?? [],
      todoTitle,
      totalCount: data?.todos?.meta?.totalCount,
      page,
      pageSize,
      activeButton,
      activeTodo,
      isLoading,
      fetchError,
      mutationError,
    },
    actions: {
      createTodo,
      updateTodo,
      deleteTodo,
    },
    setters: {
      setTodoTitle,
      setActiveTodo,
      setActiveButton,
      setPage,
      setPageSize,
    },
  };
}
