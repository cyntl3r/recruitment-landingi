import { AnyAction } from 'redux';
import { HEADER_SET_TITLE } from '../actionTypes';

export interface HeaderState {
  title: string;
}

const initialState: HeaderState = {
  title: '',
};

export const headerReducer = (
  state = initialState,
  { type, payload }: AnyAction
): HeaderState => {
  switch (type) {
    case HEADER_SET_TITLE: {
      return {
        ...state,
        title: payload,
      };
    }
    default: {
      return state;
    }
  }
};
