import { AnyAction } from 'redux';
import {
  ARTICLE_FETCHING_START,
  ARTICLE_FETCHING_ERROR,
  ARTICLE_FETCHING_FILL,
} from '../actionTypes';
import { Article } from '../types';

export interface ArticleState {
  articles: Article[];
  loading: boolean;
  error: boolean;
}

const initialState: ArticleState = {
  articles: [],
  loading: true,
  error: false,
};

export const articleReducer = (
  state = initialState,
  { type, payload }: AnyAction
): ArticleState => {
  switch (type) {
    case ARTICLE_FETCHING_START: {
      return {
        ...state,
        loading: true,
        error: false,
        articles: [],
      };
    }
    case ARTICLE_FETCHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ARTICLE_FETCHING_FILL: {
      return {
        ...state,
        articles: payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
