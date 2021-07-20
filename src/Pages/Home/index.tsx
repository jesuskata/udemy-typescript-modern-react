// Dependencies
import React from 'react';

// Context Store
import { Store } from '../../Store';

// Context Actions
import { fetchDataAction, toggleFavAction } from '../../Context/actions';

// Lazy Load Components
const EpisodesList = React.lazy(() => import('../../Components/EpisodesList'));

export const Home = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch); // eslint-disable-line
  }, []); // eslint-disable-line

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodesList
          episodes={state?.episodes}
          favourites={state?.favourites}
          toggleFavAction={toggleFavAction}
          store={{ state, dispatch }}
        />
      </section>
    </React.Suspense>
  );
};
