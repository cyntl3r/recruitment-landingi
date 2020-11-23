import {
  ARTICLE_FETCHING_START,
  ARTICLE_FETCHING_ERROR,
  ARTICLE_FETCHING_FILL,
} from '../actionTypes';
import { fetchArticlesService } from '../services';
import { ThunkResult } from '../types';

export const fetchArticles = (): ThunkResult<void> => {
  return async (dispatch) => {
    try {
      dispatch({ type: ARTICLE_FETCHING_START });
      const { data } = await fetchArticlesService();
      dispatch({ type: ARTICLE_FETCHING_FILL, payload: data });
    } catch (err) {
      dispatch({ type: ARTICLE_FETCHING_ERROR });
    }
  };
};
