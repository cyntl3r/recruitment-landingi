import { FunctionComponent, useEffect, useState } from 'react';
import styles from './Loading.styles.css';

let isComponentMounted = false;

export const Loading: FunctionComponent = () => {
  const [lastsMoreThanSecond, setLastsMoreThanSecond] = useState(false);

  useEffect(() => {
    isComponentMounted = true;
    setTimeout(() => {
      if (isComponentMounted) {
        setLastsMoreThanSecond(true);
      }
    }, 1000);
    return () => {
      isComponentMounted = false;
    };
  }, []);

  if (!lastsMoreThanSecond) {
    return null;
  }

  return <div data-testid="loading" className={styles.loading} />;
};
