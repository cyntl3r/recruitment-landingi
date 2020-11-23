import { HEADER_SET_TITLE } from '../actionTypes';

export const setHeaderTitle = (title: string) => ({
  type: HEADER_SET_TITLE,
  payload: title,
});
