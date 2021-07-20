// Dependencies
import React from 'react';

// TypeScript Interfaces
import { IEpisode, IEpisodeListProps } from '../typescript/interfaces';

const EpisodesList = ({
  episodes,
  favourites,
  toggleFavAction,
  store,
}: IEpisodeListProps): JSX.Element => {
  const { state, dispatch } = store;
  return (
    <>
      {episodes.map((episode: IEpisode) => (
        <section key={episode.id} className="episode-box">
          <img src={episode?.image?.medium} alt={episode.name} />
          <div>{episode.name}</div>
          <section>
            <p>
              Season: {episode.season} Number: {episode.number}
            </p>
            <button
              type="button"
              onClick={() => toggleFavAction(episode, dispatch, state)}
            >
              {favourites.find((fav: IEpisode) => fav.id === episode.id)
                ? 'Unfav'
                : 'Fav'}
            </button>
          </section>
        </section>
      ))}
    </>
  );
};

export default EpisodesList;
