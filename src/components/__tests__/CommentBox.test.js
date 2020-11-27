import React from 'react';
import { mount, shallow } from 'enzyme';
import { CommentBox } from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  const handleChange = jest.fn();
  wrapped = mount(<CommentBox onChange={handleChange} />);
});

it('has a text area and a button', () => {
  // console.log(wrapped.find('textarea').debug());
  // console.log(wrapped.find('button').debug());
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped
    .find('textarea')
    .simulate('change', { target: { value: 'new comment' } });

  const handleChange = jest.spyOn(React, 'useState');
  handleChange.mockImplementation((comment) => [comment, setComment]);
  console.log(handleChange.toBeTruthy());
  expect(handleChange).toBeTruthy();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
