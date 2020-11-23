import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchArticles } from '../../actions/article';
import { Article } from '../Article/Article';
import { ArticleList } from '../ArticleList/ArticleList';
import { Header } from '../Header/Header';
import { NotFound } from '../NotFound/NotFound';
import './App.styles.css';

export const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <ArticleList />
        </Route>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
