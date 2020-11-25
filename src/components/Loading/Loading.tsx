import { FunctionComponent, useEffect, useState } from 'react';
import styles from './Loading.styles.css';

export const Loading: FunctionComponent = () => {
  const [lastsMoreThanSecond, setLastsMoreThanSecond] = useState(false);

  useEffect(() => {
    let isComponentMounted = true;
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
