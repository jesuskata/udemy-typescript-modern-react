/**
/ ----------------------------------------------------
/ All TypeScript Interfaces
/ ----------------------------------------------------
*/

// TypeScript Types
import { ActionType } from './enums';
import { TSDispatch } from './types';

export interface IInitialState {
  episodes: IEpisode[];
  favourites: IEpisode[] | any; // eslint-disable-line
}

export interface IAction {
  type: ActionType;
  payload: IEpisode[];
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface IEpisodeListProps {
  episodes: IEpisode[];
  favourites: IEpisode[];
  toggleFavAction(
    episode: IEpisode,
    dispatch: TSDispatch,
    state: IInitialState
  ): IAction;
  store: {
    state: IInitialState;
    dispatch: TSDispatch;
  };
}
