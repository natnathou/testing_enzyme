import React from 'react';
import { shallow } from 'enzyme';
import { App } from 'components/App';
import { CommentBox } from 'components/CommentBox';
import { CommentsList } from 'components/CommentsList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('show comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('show comment list', () => {
  expect(wrapper.find(CommentsList).length).toEqual(1);
});
