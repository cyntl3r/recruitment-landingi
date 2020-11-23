import {
  addArticleToFavourites,
  articleFavouritesStorageKey,
  isArticleInFavourites,
  removeArticleFromFavourites,
} from './articleFavourites';

const articleId = 10;

test('add article to favourite', () => {
  addArticleToFavourites(articleId);
  expect(localStorage.getItem(articleFavouritesStorageKey)).toBeTruthy();
});

test('check is article in favourites', () => {
  expect(isArticleInFavourites(articleId)).toBeTruthy();
  expect(localStorage.getItem(articleFavouritesStorageKey)).toContain(
    articleId.toString()
  );
});

test('remove article from favourites', () => {
  removeArticleFromFavourites(articleId);
  expect(localStorage.getItem(articleFavouritesStorageKey)).toBe('[]');
});
