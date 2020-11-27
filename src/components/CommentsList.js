import React from 'react';
import { connect } from 'react-redux';

export const _CommentsList = ({ comments }) => {
  const mapCommentsList = () =>
    comments.map((commentUnit, index) => {
      return <div key={index}>{commentUnit}</div>;
    });

  return <div>{mapCommentsList()}</div>;
};

const mapStateToProps = (state) => {
  let { comments } = state;
  return { comments };
};

export const CommentsList = connect(mapStateToProps)(_CommentsList);
