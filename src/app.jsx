import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/mdi/scss/materialdesignicons.scss';
import './scss/app.scss';

const App = () => (
  <div className="container">
    <h1>It's alive!</h1>
    <i className="mdi mdi-bell"></i>
  </div>
);

render(<App />, document.getElementById('root'));
