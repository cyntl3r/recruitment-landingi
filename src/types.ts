import { ThunkAction } from 'redux-thunk';
import { AppState } from './store';

export type ThunkResult<R> = ThunkAction<
  R,
  AppState,
  undefined,
  { type: string; payload?: unknown }
>;

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ArticleComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
