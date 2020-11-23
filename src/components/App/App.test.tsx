import React from 'react';
import { render } from '../../testing/test-utils';
import { App } from './App';

test('snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
