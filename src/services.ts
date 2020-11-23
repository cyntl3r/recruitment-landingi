import axios from 'axios';
import { Article, ArticleComment } from './types';

export const fetchArticlesService = () => axios.get<Article[]>('/posts');

export const fetchCommentsOfArticleService = (articleId: number) =>
  axios.get<ArticleComment[]>(`/post/${articleId}/comments`);

export const addNewCommentService = (
  articleId: number,
  email: string,
  body: string
) => axios.post(`/post/${articleId}/comments`, { email, body });
