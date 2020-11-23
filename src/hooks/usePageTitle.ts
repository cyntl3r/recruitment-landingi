import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../actions/header';

export const usePageTitle = (title: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Blog ${title ? `- ${title}` : ''}`;
    dispatch(setHeaderTitle(title));
  }, []);
};
