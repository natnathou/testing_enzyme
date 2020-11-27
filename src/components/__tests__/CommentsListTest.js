import React from 'react';
import { mount } from 'enzyme';
import { CommentsList } from 'components/CommentsList';
import { Root } from 'components/Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentsList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount(
    <Root>
      <CommentsList />
    </Root>
  );
});

it('check is CommentList Exist', () => {
  // Need to be modified!
  expect(wrapped.length).toEqual(1);
});

// it("check if the number li match to the number of comment")
