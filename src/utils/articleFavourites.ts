export const articleFavouritesStorageKey = 'articleFavourites';

const getFavourites = () => {
  try {
    const articleFavourites = localStorage.getItem(articleFavouritesStorageKey);
    if (articleFavourites) {
      return JSON.parse(articleFavourites);
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};

const saveFavourites = (favouritesArr: string[]) => {
  localStorage.setItem(
    articleFavouritesStorageKey,
    JSON.stringify(favouritesArr)
  );
};

export const addArticleToFavourites = (articleId: number) => {
  const favourites = getFavourites();
  if (!isArticleInFavourites(articleId)) {
    saveFavourites([...favourites, articleId.toString()]);
  }
};

export const removeArticleFromFavourites = (articleId: number) => {
  const favourites = getFavourites();
  if (isArticleInFavourites(articleId)) {
    saveFavourites(
      favourites.filter((fav: string) => fav !== articleId.toString())
    );
  }
};

export const isArticleInFavourites = (articleId: number) => {
  const favourites = getFavourites();
  return favourites.includes(articleId.toString());
};
