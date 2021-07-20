// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';

// Components
import { App } from './App';

// Pages: Reach Router
import { Home } from './Pages/Home';
import { Favs } from './Pages/Favs';

// Styles
import './index.css';

// Web Vitals
// import reportWebVitals from './reportWebVitals';

// React Context
import { StoreProvider } from './Store';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
): JSX.Element => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <React.StrictMode>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<Home />} path="/" />
          <RouterPage pageComponent={<Favs />} path="/favs" />
        </App>
      </Router>
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
