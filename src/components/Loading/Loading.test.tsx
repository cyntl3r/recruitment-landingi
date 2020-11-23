import { render } from '../../testing/test-utils';
import { Loading } from './Loading';

test('snapshot', () => {
  const { container } = render(<Loading />);
  expect(container).toMatchSnapshot();
});

test('wrapper render', async () => {
  const { findByTestId } = render(<Loading />);
  const element = await findByTestId('loading');
  expect(element).toBeTruthy();
});
