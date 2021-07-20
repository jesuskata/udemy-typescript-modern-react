/**
 * Action for Fetching Data
 */

// TypeScript Interfaces
import { IAction, IEpisode, IInitialState } from '../../typescript/interfaces';

// Constants
import { apiURL } from '../../constants';
import { TSDispatch } from '../../typescript/types';

export const fetchDataAction = async (
  dispatch: TSDispatch | any // eslint-disable-line
): Promise<IAction> => {
  const data = await fetch(apiURL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes, // eslint-disable-line
  });
};

/**
 * Action for Toggle Favourites
 */

export const toggleFavAction = (
  episode: IEpisode | any, // eslint-disable-line
  dispatch: TSDispatch | any, // eslint-disable-line
  state: IInitialState
): IAction => {
  const episodeInFav: boolean = state.favourites.includes(episode);
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode,
  };
  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode,
    };
  }
  return dispatch(dispatchObj);
};
