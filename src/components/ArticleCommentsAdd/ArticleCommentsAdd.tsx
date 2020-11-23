import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import styles from './ArticleCommentsAdd.styles.css';

export interface ArticleCommentsAddProps {
  onSubmit: (email: string, body: string) => void;
}

export const ArticleCommentsAdd: FunctionComponent<ArticleCommentsAddProps> = ({
  onSubmit,
}) => {
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, comment);
    setComment('');
    setEmail('');
  };

  return (
    <div data-testid="article-comments-add">
      <h4>Add comment</h4>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className={styles.textarea}
          placeholder="Comment..."
          required
        />
        <div className={styles.flex}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-mail address"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
