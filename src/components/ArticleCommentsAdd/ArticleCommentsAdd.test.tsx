import { render } from '../../testing/test-utils';
import { ArticleCommentsAdd } from './ArticleCommentsAdd';

test('snapshot', () => {
  const { container } = render(<ArticleCommentsAdd onSubmit={jest.fn()} />);
  expect(container).toMatchSnapshot();
});

test('wrapper render', () => {
  const { getByTestId } = render(<ArticleCommentsAdd onSubmit={jest.fn()} />);
  expect(getByTestId('article-comments-add')).toBeDefined();
});
