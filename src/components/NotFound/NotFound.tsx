import { FunctionComponent } from 'react';
import { usePageTitle } from '../../hooks/usePageTitle';
import './NotFound.styles.css';

export const NotFound: FunctionComponent = () => {
  usePageTitle('Not Found');

  return (
    <p data-testid="not-found">
      A website with such an address has not been found!
    </p>
  );
};
