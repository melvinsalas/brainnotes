import React from 'react';
import { render } from 'react-dom';

import NavTop from './js/navTop';
import NavSide from './js/navSide';
import MainContainer from './js/main';


import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/mdi/scss/materialdesignicons.scss';
import './scss/app.scss';

const App = () => (
  <div>
    <NavTop/>
    <NavSide/>
    <MainContainer/>
  </div>
);

render(<App />, document.getElementById('root'));
