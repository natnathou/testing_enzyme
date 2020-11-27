import React from 'react';

export const _CommentsList = ({ comments }) => {
  const mapCommentsList = () => {
    comments.map((commentUnit, index) => {
      <div key={index}>{commentUnit}</div>;
    });
  };

  return <div>{mapCommentsList()}</div>;
};

const mapStateToProps = (state) => {
  let { comments } = state;
  return { comments };
};

export const CommentsList = connect(mapStateToProps, {
  addCommentAction,
})(_CommentsList);
