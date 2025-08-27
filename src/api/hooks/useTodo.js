import { useCallback, useMemo, useReducer } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation, useGetTodosQuery, } from "../graphql/generated/graphqlzero/hooks";
import { queryClient } from "@/lib/queryClient";
import { initialTodoState, todoReducer, } from "@/features/todo/model/TodoReducer";
import { TodoActionTypes } from "@/features/todo/model/TodoTypes";
import { TOAST_MESSAGES } from "@/features/todo/constants/toastMessages";
import { errorHandler } from "@/shared/utils/errorHandler";
import { OperatorKindEnum } from "../graphql/generated/graphqlzero/types";
import { STATUS } from "@/features/todo/types/todo";
import { TIME } from "@/shared/constants/time";
import { keepPreviousData } from "@tanstack/react-query";
export function useTodos() {
    const [state, dispatch] = useReducer(todoReducer, initialTodoState);
    const { data, isLoading, error: fetchError, isPlaceholderData, } = useGetTodosQuery({
        options: {
            paginate: { page: state.page, limit: state.pageSize },
            ...(state.activeButton === STATUS.completed && {
                operators: [
                    {
                        field: "completed",
                        kind: OperatorKindEnum.Like,
                        value: "true",
                    },
                ],
            }),
        },
    }, {
        staleTime: TIME.MINUTE,
        enabled: true,
        placeholderData: keepPreviousData,
    });
    const dataKey = useMemo(() => useGetTodosQuery.getKey({
        options: { paginate: { page: state.page, limit: state.pageSize } },
    }), [state.page, state.pageSize]);
    const createTodoMutation = useCreateTodoMutation({
        onMutate: async ({ input }) => {
            dispatch({ type: TodoActionTypes.RESET_ERROR });
            await queryClient.cancelQueries({ queryKey: dataKey });
            const previousData = queryClient.getQueryData(dataKey);
            const previousTodo = previousData?.todos ?? [];
            queryClient.setQueryData(dataKey, (oldData) => {
                if (!oldData?.todos?.data)
                    return oldData;
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
                payload: err.message,
            });
            toast(err.message);
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
            const previousData = queryClient.getQueryData(dataKey);
            queryClient.setQueryData(dataKey, (oldData) => {
                if (!oldData?.todos?.data)
                    return oldData;
                return {
                    ...oldData,
                    todos: {
                        ...oldData.todos,
                        data: oldData?.todos.data.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
                    },
                };
            });
            return { previousTodos: previousData?.todos ?? [] };
        },
        onError: async (err, _variables, context) => {
            dispatch({
                type: TodoActionTypes.SET_ERROR,
                payload: err.message,
            });
            toast.error(errorHandler(err).userMessage || 'Произошла ошибка');
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
            const previousData = queryClient.getQueryData(dataKey);
            queryClient.setQueryData(dataKey, (oldData) => {
                if (!oldData?.todos?.data)
                    return oldData;
                return {
                    ...oldData,
                    todos: {
                        ...oldData.todos,
                        data: oldData.todos.data.filter((item) => item.id !== id),
                    },
                };
            });
            return { previousTodos: previousData?.todos?.data ?? [] };
        },
        onError: (err, _variables, context) => {
            toast.error(errorHandler(err).userMessage || 'Произошла ошибка');
            dispatch({
                type: TodoActionTypes.SET_ERROR,
                payload: err.message,
            });
            if (context?.previousTodos) {
                queryClient.setQueryData(dataKey, {
                    todos: context.previousTodos,
                });
            }
        },
        onSuccess: () => {
            toast.success(TOAST_MESSAGES.deletedTodo);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: dataKey });
        },
    });
    const createTodo = useCallback(async () => {
        if (!state.todoTitle)
            return;
        await createTodoMutation.mutateAsync({
            input: { title: state.todoTitle, completed: false },
        });
        dispatch({ type: TodoActionTypes.RESET_TODO_TITLE });
    }, [createTodoMutation, state.todoTitle]);
    const updateTodo = useCallback(async (id) => {
        const currentTodos = queryClient.getQueryData(dataKey);
        const todo = currentTodos?.todos?.data?.find((item) => item?.id === id);
        const completed = todo?.completed;
        await updateTodoMutation.mutateAsync({
            id,
            input: {
                completed: !completed,
            },
        });
    }, [updateTodoMutation, dataKey]);
    const deleteTodo = useCallback(async (id) => {
        await deleteMutation.mutateAsync({ id });
    }, [deleteMutation]);
    const handleInputChange = (value) => {
        dispatch({
            type: TodoActionTypes.SET_TODO_TITLE,
            payload: value,
        });
    };
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
            isPlaceholderData,
        },
        actions: {
            createTodo,
            updateTodo,
            deleteTodo,
            handleInputChange,
        },
        dispatch,
        setters: {
            setActiveTodo: (todo) => dispatch({
                type: TodoActionTypes.SET_ACTIVE_TODO,
                payload: todo,
            }),
            setActiveButton: (button) => dispatch({
                type: TodoActionTypes.SET_ACTIVE_BUTTON,
                payload: button,
            }),
            setPage: (page) => dispatch({
                type: TodoActionTypes.SET_PAGE,
                payload: page,
            }),
            setPageSize: (pageSize) => dispatch({
                type: TodoActionTypes.SET_PAGESIZE,
                payload: pageSize,
            }),
        },
    };
}
