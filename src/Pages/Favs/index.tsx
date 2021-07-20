// Dependencies
import React from 'react';

// Context Store
import { Store } from '../../Store';

// Context Actions
import { toggleFavAction } from '../../Context/actions';

// Lazy Load Components
const EpisodesList = React.lazy(() => import('../../Components/EpisodesList'));

export const Favs = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList
          episodes={state?.favourites}
          favourites={state?.favourites}
          toggleFavAction={toggleFavAction}
          store={{ state, dispatch }}
        />
      </div>
    </React.Suspense>
  );
};
