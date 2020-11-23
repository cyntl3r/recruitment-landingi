import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { headerReducer } from './reducers/headerReducer';
import { articleReducer } from './reducers/articleReducer';
import { commentReducer } from './reducers/commentReducer';

const reducers = {
  header: headerReducer,
  article: articleReducer,
  comment: commentReducer,
};

const combinedReducers = combineReducers(reducers);
export type AppState = ReturnType<typeof combinedReducers>;
export const store = createStore(combinedReducers, applyMiddleware(thunk));
