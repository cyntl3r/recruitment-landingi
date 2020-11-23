import { FunctionComponent } from 'react';
import styles from './ArticleFavouriteButton.styles.css';

export interface ArticleFavouriteButtonProps {
  isFavourite: boolean;
  onClick: () => void;
}

export const ArticleFavouriteButton: FunctionComponent<ArticleFavouriteButtonProps> = ({
  isFavourite,
  onClick,
}) => (
  <button
    data-testid="article-favourite-button"
    type="button"
    className={styles.button}
    onClick={onClick}
  >
    {isFavourite ? 'Remove from' : 'Add to'} {`"Favourites"`}
  </button>
);
