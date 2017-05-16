import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div className="container">
    <h1>It's alive!</h1>
  </div>
);

render(<App />, document.getElementById('root'));
