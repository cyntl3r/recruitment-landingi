import { render } from '../../testing/test-utils';
import { ArticleListItem } from './ArticleListItem';

test('snapshot', () => {
  const { container } = render(<ArticleListItem id={2} title="test" />);
  expect(container).toMatchSnapshot();
});

test('wrapper render', () => {
  const { getByTestId } = render(<ArticleListItem id={1} title="test" />);
  expect(getByTestId('article-list-item')).toBeDefined();
});
