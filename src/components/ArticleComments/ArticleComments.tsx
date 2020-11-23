import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment, fetchCommentsOfArticle } from '../../actions/comment';
import { CommentState } from '../../reducers/commentReducer';
import { AppState } from '../../store';
import { ArticleCommentsAdd } from '../ArticleCommentsAdd/ArticleCommentsAdd';
import styles from './ArticleComments.styles.css';

export interface ArticleCommentsProps {
  articleId: number;
}

export const ArticleComments: FunctionComponent<ArticleCommentsProps> = ({
  articleId,
}) => {
  const dispatch = useDispatch();
  const { loading, comments } = useSelector<AppState, CommentState>(
    (state) => state.comment
  );

  const handleOnNewCommentSubmit = (email: string, body: string) => {
    dispatch(addNewComment(articleId, email, body));
  };

  useEffect(() => {
    dispatch(fetchCommentsOfArticle(articleId));
  }, []);

  return (
    <div data-testid="article-comments">
      <ArticleCommentsAdd onSubmit={handleOnNewCommentSubmit} />
      <h4>Comments</h4>
      {loading ? (
        'Loading...'
      ) : !comments.length ? (
        <p>no comments</p>
      ) : (
        <ul className={styles.list}>
          {comments.map(({ id, email, body }) => (
            <li key={id} className={styles.listItem}>
              <b>- {email}</b>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
