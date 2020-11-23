import { render } from '../../testing/test-utils';
import { Header } from './Header';

test('render simple header', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Blog')).toBeDefined();
});

// test('render header with title', () => {
//   const { getByText } = render(<Header />);
// });
