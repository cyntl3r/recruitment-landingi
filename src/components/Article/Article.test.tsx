import { render } from '../../testing/test-utils';
import { Article } from './Article';

test('snapshot', () => {
  const { container } = render(<Article />);
  expect(container).toMatchSnapshot();
});
