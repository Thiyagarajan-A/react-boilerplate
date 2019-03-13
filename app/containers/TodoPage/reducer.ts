import initialState, { ITodoState } from './models';
import Immutable from 'seamless-immutable';

const todoReducer = (state: Immutable.ImmutableObject<ITodoState> = initialState, action): Immutable.ImmutableObject<ITodoState>  => {
  return state;
}

export default todoReducer;
