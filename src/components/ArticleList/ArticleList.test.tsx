import { render } from '../../testing/test-utils';
import { ArticleList } from './ArticleList';

test('snapshot', () => {
  const { container } = render(<ArticleList />);
  expect(container).toMatchSnapshot();
});
