import React from 'react';
import { render } from 'react-dom';

class NavSide extends React.Component {
  state = {comments: []};
  render () {
    return (
      <nav className="sidebar">
        <ul>
          <li><a id="btn-notes" href="#"><i className="mdi mdi-note" data-toggle="tooltip" data-placement="right" title="Notes"></i></a></li>
          <li><a id="btn-notebooks" href="#"><i className="mdi mdi-book" data-toggle="tooltip" data-placement="right" title="Notebooks"></i></a></li>
          <li><a id="btn-tags" href="#"><i className="mdi mdi-tag" data-toggle="tooltip" data-placement="right" title="Tags"></i></a></li>
        </ul>
      </nav>
      );
    }
  }; 

  export default NavSide;