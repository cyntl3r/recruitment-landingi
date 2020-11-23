import { render } from '../../testing/test-utils';
import { ArticleListItem } from './ArticleListItem';

test('wrapper render', () => {
  const { getByTestId } = render(<ArticleListItem id={2} title="test" />);
  expect(getByTestId('article-list-item')).toBeDefined();
});
