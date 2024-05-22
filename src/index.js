import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-t3d7c5dm7ama83ec.us.auth0.com"
    clientId="Vrkm68mkzwgZn4tbsy1LJCwh95CS5kPb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
