import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { isArticleInFavourites } from '../../utils/articleFavourites';
import styles from './ArticleListItem.styles.css';

export interface ArticleListItemProps {
  id: number;
  title: string;
}

export const ArticleListItem: FunctionComponent<ArticleListItemProps> = ({
  id,
  title,
}) => (
  <li data-testid="article-list-item" className={styles.item}>
    <Link to={`/article/${id}`} className={styles.link}>
      <span className={styles.number}>#{id}</span> {title}{' '}
      {isArticleInFavourites(id) && '❤️'}
    </Link>
  </li>
);
