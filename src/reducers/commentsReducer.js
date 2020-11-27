import { ADD_COMMENT } from '../actions/type';

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return [...state];
  }
};
