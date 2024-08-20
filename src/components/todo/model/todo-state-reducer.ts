import { Todo, TodoListType } from "../types";
import { capitalizeFirstWord } from "./capitalizeFirstWord";

export const TODO_STATE_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  SHOW_ALL_TODOS: "show-all-todos",
  SHOW_COMPLETED_TODOS: "show-completed-todos",
  SHOW_ACTIVE_TODOS: "show-active-todos",
  DELETE_COMPLETED_TODOS: "delete-completed-todos",
};

export interface TodoAction {
  type: string;
  payload?: Partial<Todo>; 
}

export const todoStateReducer = (state: TodoListType, action: TodoAction): TodoListType => {
  switch (action.type) {
    case TODO_STATE_ACTIONS.ADD_TODO:
      if (!action.payload || !action.payload.task) return state;
      return [
        ...state,
        {
          id: Date.now(),
          task: capitalizeFirstWord(action.payload.task),
          completed: false,
        }
      ];
    case TODO_STATE_ACTIONS.TOGGLE_TODO:
      if (!action.payload || action.payload.id === undefined) return state;
      return state.map((todo) =>
        todo.id === action.payload!.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case TODO_STATE_ACTIONS.DELETE_TODO:
      if (!action.payload || action.payload.id === undefined) return state;
      return state.filter((todo) => todo.id !== action.payload!.id);
    case TODO_STATE_ACTIONS.DELETE_COMPLETED_TODOS:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
