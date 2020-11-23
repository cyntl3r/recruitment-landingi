import { render } from '../../testing/test-utils';
import { NotFound } from './NotFound';

test('is wrapper render', () => {
  const { getByTestId } = render(<NotFound />);
  expect(getByTestId('not-found')).toBeDefined();
});

test('set page title', () => {
  render(<NotFound />);
  expect(document.title).toBe('Blog - Not Found');
});
