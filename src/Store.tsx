// Dependencies
import React from 'react';

// TypeScript Types
import { TStoreProviderProps } from './typescript/types';

// TypeScript Interfaces
import { IAction, IInitialState } from './typescript/interfaces';

const initialState: IInitialState = {
  episodes: [],
  favourites: [],
};

export const Store: IInitialState | any = React.createContext(initialState); // eslint-disable-line

const reducer = (state: IInitialState, action: IAction): IInitialState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({
  children,
}: TStoreProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<IInitialState, IAction>
  >(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
