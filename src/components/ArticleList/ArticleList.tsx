import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { usePageTitle } from '../../hooks/usePageTitle';
import { ArticleState } from '../../reducers/articleReducer';
import { AppState } from '../../store';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Loading } from '../Loading/Loading';
import styles from './ArticleList.styles.css';

export const ArticleList: FunctionComponent = () => {
  usePageTitle('Article List');
  const { loading, error, articles } = useSelector<AppState, ArticleState>(
    (state) => state.article
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>The articles could not be downloaded.</p>;
  }

  return (
    <ul data-testid="article-list" className={styles.list}>
      {articles.map(({ id, title }) => (
        <ArticleListItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};
