import { ADD_COMMENT } from './type';

export const addCommentAction = (comment) => {
  return { type: ADD_COMMENT, payload: comment };
};
