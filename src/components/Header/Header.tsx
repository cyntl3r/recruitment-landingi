import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderState } from '../../reducers/headerReducer';
import { AppState } from '../../store';
import styles from './Header.styles.css';

export const Header: FunctionComponent = () => {
  const { title } = useSelector<AppState, HeaderState>((state) => state.header);
  return (
    <h1>
      <Link to="/" className={styles.link}>
        Blog
      </Link>{' '}
      {title && <span className={styles.title}>{title}</span>}
    </h1>
  );
};
