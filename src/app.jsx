import React from 'react';
import { render } from 'react-dom';

import AppContainer from './js/appContainer';


import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/mdi/scss/materialdesignicons.scss';
import './scss/app.scss';

console.error = (function() {
    var error = console.error

    return function(exception) {
        if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
            error.apply(console, arguments)
        }
    }
})()

const App = () => (
  <AppContainer />
);

render(<App />, document.getElementById('root'));
