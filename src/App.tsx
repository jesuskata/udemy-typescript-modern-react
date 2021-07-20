// Dependencies
import React from 'react';
import { Link } from '@reach/router';

// React Context
import { Store } from './Store';

// Styles
import './index.css';

// TypeScript Types
import { TSChildrenProps } from './typescript/types';

export const App = ({ children }: TSChildrenProps): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty React TypeScript App</h1>
          <p>Pick your favourite!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favs">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {children}
    </>
  );
};
