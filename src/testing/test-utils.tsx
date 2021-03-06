import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  Suspense,
} from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter } from 'react-router-dom';

interface AllTheProvidersProps {
  children: ReactNode;
}

const AllTheProviders: FunctionComponent<AllTheProvidersProps> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={null}>{children}</Suspense>
      </BrowserRouter>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
