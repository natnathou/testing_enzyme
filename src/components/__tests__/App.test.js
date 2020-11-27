import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from 'components/App';
import { CommentBox } from 'components/CommentBox';
import { CommentList } from 'components/CommentsList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('show comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('show comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
