export type TodoActions = {
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
export const STATUS = {
  all: 'all',
  completed: 'completed'
} as const;

export type Status = typeof STATUS[keyof typeof STATUS];