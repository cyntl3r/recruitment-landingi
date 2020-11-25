import { FunctionComponent, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchArticles } from '../../actions/article';
import { Header } from '../Header/Header';
import './App.styles.css';

const ArticleList = lazy(() =>
  import('../ArticleList/ArticleList').then((module) => ({
    default: module.ArticleList,
  }))
);

const Article = lazy(() =>
  import('../Article/Article').then((module) => ({
    default: module.Article,
  }))
);

const NotFound = lazy(() =>
  import('../NotFound/NotFound').then((module) => ({
    default: module.NotFound,
  }))
);

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
