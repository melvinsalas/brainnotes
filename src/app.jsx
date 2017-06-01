

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Match } from 'react-router-dom'
import AppContainer from './js/appContainer';

import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/mdi/scss/materialdesignicons.scss';
import './scss/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

 render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route path='/' render={
            (props) => (
              <AppContainer/>
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
};

render(<App />, document.getElementById('root'));
