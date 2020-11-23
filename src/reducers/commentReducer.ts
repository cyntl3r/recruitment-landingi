import { AnyAction } from 'redux';
import {
  COMMENT_FETCHING_START,
  COMMENT_FETCHING_ERROR,
  COMMENT_FETCHING_SUCCESS,
  COMMENT_ADDING_START,
  COMMENT_ADDING_ERROR,
  COMMENT_ADDING_SUCCESS,
} from '../actionTypes';
import { ArticleComment } from '../types';

export interface CommentState {
  comments: ArticleComment[];
  loading: boolean;
  error: boolean;
}

const initialState: CommentState = {
  comments: [],
  loading: true,
  error: false,
};

export const commentReducer = (
  state = initialState,
  { type, payload }: AnyAction
): CommentState => {
  switch (type) {
    case COMMENT_FETCHING_START: {
      return {
        ...state,
        loading: true,
        error: false,
        comments: [],
      };
    }
    case COMMENT_FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case COMMENT_FETCHING_SUCCESS: {
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    }
    case COMMENT_ADDING_START: {
      return state;
    }
    case COMMENT_ADDING_ERROR: {
      return state;
    }
    case COMMENT_ADDING_SUCCESS: {
      return {
        ...state,
        comments: [payload, ...state.comments],
      };
    }
    default: {
      return state;
    }
  }
};
