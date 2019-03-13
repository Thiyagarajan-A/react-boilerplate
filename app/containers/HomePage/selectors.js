/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
// import { initialState } from './reducer';

const selectHome = state => state.home;

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.username);

export { selectHome, makeSelectUsername };
