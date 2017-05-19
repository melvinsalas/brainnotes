import React from 'react';
import { render } from 'react-dom';

import AppContainer from './js/appContainer';


import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/mdi/scss/materialdesignicons.scss';
import './scss/app.scss';

const App = () => (
  <AppContainer />
);

render(<App />, document.getElementById('root'));
