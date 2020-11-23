import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePageTitle } from '../../hooks/usePageTitle';
import { ArticleState } from '../../reducers/articleReducer';
import { AppState } from '../../store';
import { Loading } from '../Loading/Loading';
import { fetchCommentsOfArticle } from '../../actions/comment';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import styles from './Article.styles.css';
import { ArticleFavouriteButton } from '../ArticleFavouriteButton/ArticleFavouriteButton';
import {
  addArticleToFavourites,
  isArticleInFavourites,
  removeArticleFromFavourites,
} from '../../utils/articleFavourites';

export const Article: FunctionComponent = () => {
  usePageTitle('Article Preview');
  const { id } = useParams<{ id: string }>();
  const idAsNumber = parseInt(id, 10);
  const dispatch = useDispatch();
  const { articles, loading } = useSelector<AppState, ArticleState>(
    (state) => state.article
  );
  const [isFavourite, setIsFavourite] = useState(
    isArticleInFavourites(idAsNumber)
  );

  const handleFavouriteButtonClick = () => {
    if (isFavourite) {
      setIsFavourite(false);
      removeArticleFromFavourites(idAsNumber);
    } else {
      setIsFavourite(true);
      addArticleToFavourites(idAsNumber);
    }
  };

  useEffect(() => {
    dispatch(fetchCommentsOfArticle(idAsNumber));
  }, []);

  if (loading) {
    return <Loading />;
  }

  const article = articles.find((article) => article.id === idAsNumber);

  if (!article) {
    return <p>The article was not found.</p>;
  }

  const { title, body } = article;

  return (
    <div data-testid="article">
      <ArticleFavouriteButton
        isFavourite={isFavourite}
        onClick={handleFavouriteButtonClick}
      />
      <h2 className={styles.title}>
        {title} {isFavourite && '❤️️'}
      </h2>
      <p>{body}</p>
      <div className={styles.spacer} />
      <ArticleComments articleId={idAsNumber} />
    </div>
  );
};
