import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router'

import AppContainer from './js/appContainer';


import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/mdi/scss/materialdesignicons.scss';
import './scss/app.scss';

const App = () => (
  // <BrowserRouter>
    // <div className='app'>
      // <Match exactly pattern='/' component={AppContainer}/>
      // <Match exactly pattern='/' component={
        // (props)=>(
          <AppContainer
            testProp="Potato"
          />
        // )}
      // />
    // </div>
  // </BrowserRouter>
);

render(<App />, document.getElementById('root'));
