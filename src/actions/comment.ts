import {
  COMMENT_FETCHING_START,
  COMMENT_FETCHING_ERROR,
  COMMENT_FETCHING_SUCCESS,
  COMMENT_ADDING_START,
  COMMENT_ADDING_ERROR,
  COMMENT_ADDING_SUCCESS,
} from '../actionTypes';
import {
  addNewCommentService,
  fetchCommentsOfArticleService,
} from '../services';
import { ThunkResult } from '../types';

export const fetchCommentsOfArticle = (postId: number): ThunkResult<void> => {
  return async (dispatch) => {
    try {
      dispatch({ type: COMMENT_FETCHING_START });
      const { data } = await fetchCommentsOfArticleService(postId);
      dispatch({ type: COMMENT_FETCHING_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: COMMENT_FETCHING_ERROR });
    }
  };
};

export const addNewComment = (
  postId: number,
  email: string,
  body: string
): ThunkResult<void> => {
  return async (dispatch) => {
    try {
      dispatch({ type: COMMENT_ADDING_START });
      const { data } = await addNewCommentService(postId, email, body);
      dispatch({ type: COMMENT_ADDING_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: COMMENT_ADDING_ERROR });
    }
  };
};
