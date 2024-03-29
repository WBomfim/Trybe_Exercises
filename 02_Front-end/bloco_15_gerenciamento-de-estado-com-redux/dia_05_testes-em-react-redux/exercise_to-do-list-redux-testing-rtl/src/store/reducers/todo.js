import { ADD_TODO, TOOGLE_TODO, FILTER_TODOS } from '../actions/todo';

const INITIAL_STATE = {
  todos: [],
  currentId: 1,
  filter: 'all',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TODO:
    return {
      todos: [
        ...state.todos,
        {
          id: state.currentId,
          text: action.text,
          completed: false,
        },
      ],
      currentId: state.currentId + 1,
    };
  case TOOGLE_TODO:
    return {
      ...state,
      todos: state.todos
        .map((todo) => (
          (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)),
    };
  case FILTER_TODOS:
    return {
      ...state,
      filter: action.filtered,
    };
  default:
    return state;
  }
};

export default reducer;
