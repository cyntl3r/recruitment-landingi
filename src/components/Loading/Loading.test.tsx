import { render } from '../../testing/test-utils';
import { Loading } from './Loading';

test('wrapper render', () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId('loading')).toBeDefined();
});
