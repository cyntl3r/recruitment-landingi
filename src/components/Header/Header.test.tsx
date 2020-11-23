import { render } from '../../testing/test-utils';
import { Header } from './Header';

test('snapshot', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});

test('wrapper render', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('header')).toBeDefined();
});
