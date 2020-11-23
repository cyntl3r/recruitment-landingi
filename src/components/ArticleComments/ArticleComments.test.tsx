import { render } from '../../testing/test-utils';
import { ArticleComments } from './ArticleComments';

test('snapshot', () => {
  const { container } = render(<ArticleComments articleId={1} />);
  expect(container).toMatchSnapshot();
});

test('wrapper render', () => {
  const { getByTestId } = render(<ArticleComments articleId={10} />);
  expect(getByTestId('article-comments')).toBeDefined();
});
