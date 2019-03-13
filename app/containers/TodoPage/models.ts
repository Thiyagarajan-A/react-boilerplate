import Immutable from 'seamless-immutable';

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}

const initialState = Immutable({
  todos: [{
    id: 1,
    text: 'Redux Sample',
    completed: false,
  }],
});

export default initialState;
