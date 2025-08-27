import { TodoActionTypes } from "./TodoTypes";
export const initialTodoState = {
    mutationError: null,
    todoTitle: "",
    activeTodo: "",
    activeButton: "all",
    page: 1,
    pageSize: 10,
};
export function todoReducer(state, action) {
    switch (action.type) {
        case TodoActionTypes.SET_TODO_TITLE:
            return { ...state, todoTitle: action.payload };
        case TodoActionTypes.RESET_TODO_TITLE:
            return { ...state, todoTitle: "" };
        case TodoActionTypes.SET_ERROR:
            return { ...state, mutationError: action.payload };
        case TodoActionTypes.RESET_ERROR:
            return { ...state, mutationError: null };
        case TodoActionTypes.SET_ACTIVE_TODO:
            return { ...state, activeTodo: action.payload };
        case TodoActionTypes.SET_ACTIVE_BUTTON:
            return { ...state, activeButton: action.payload };
        case TodoActionTypes.SET_PAGE:
            return { ...state, page: action.payload };
        case TodoActionTypes.SET_PAGESIZE:
            return { ...state, pageSize: action.payload };
        default:
            return state;
    }
}
