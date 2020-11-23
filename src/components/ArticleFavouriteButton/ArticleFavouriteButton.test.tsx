import { render } from '../../testing/test-utils';
import { ArticleFavouriteButton } from './ArticleFavouriteButton';

test('snapshot', () => {
  const { container } = render(
    <ArticleFavouriteButton isFavourite={true} onClick={jest.fn()} />
  );
  expect(container).toMatchSnapshot();
});

test('favourite wrapper render', () => {
  const { getByTestId, findByDisplayValue } = render(
    <ArticleFavouriteButton isFavourite={true} onClick={jest.fn()} />
  );
  expect(getByTestId('article-favourite-button')).toBeDefined();
  expect(findByDisplayValue('Add to')).toBeTruthy();
});

test('no favourite wrapper render', () => {
  const { getByTestId, findByDisplayValue } = render(
    <ArticleFavouriteButton isFavourite={false} onClick={jest.fn()} />
  );
  expect(getByTestId('article-favourite-button')).toBeDefined();
  expect(findByDisplayValue('Remove from')).toBeTruthy();
});
