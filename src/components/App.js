import React from 'react';
import { CommentsList } from './CommentsList';
import { CommentBox } from './CommentBox';

export const App = () => {
  return (
    <div>
      <CommentsList />
      <CommentBox />
    </div>
  );
};
