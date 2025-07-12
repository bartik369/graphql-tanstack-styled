import type { Status } from "../types/todo";

export interface TodoState {
    mutationError: string | null;
    todoTitle: string;
    activeTodo: string;
    activeButton: string;
    page: number;
    pageSize: number;
}

export enum TodoActionTypes {
    SET_ERROR = 'SET_ERROR',
    RESET_ERROR = 'RESET_ERROR',
    SET_TODO_TITLE = 'SET_TODO_TITLE',
    RESET_TODO_TITLE = 'RESET_TODO_TITLE',
    SET_ACTIVE_TODO = 'SET_ACTIVE_TODO',
    SET_ACTIVE_BUTTON = 'SET_ACTIVE_BUTTON',
    SET_PAGE = 'SET_PAGE',
    SET_PAGESIZE = 'SET_PAGESIZE',
}

export type TodoAction =
| { type: TodoActionTypes.SET_ERROR, payload: string }
| { type: TodoActionTypes.RESET_ERROR }
| { type: TodoActionTypes.SET_TODO_TITLE, payload: string }
| { type: TodoActionTypes.RESET_TODO_TITLE }
| { type: TodoActionTypes.SET_ACTIVE_TODO, payload: string }
| { type: TodoActionTypes.SET_ACTIVE_BUTTON, payload: Status }
| { type: TodoActionTypes.SET_PAGE, payload: number }
| { type: TodoActionTypes.SET_PAGESIZE, payload: number }
