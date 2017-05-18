import React from 'react';
import { render } from 'react-dom';

class NavSide extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render () {
    const {btnNotesTarget, btnNotebooksTarget, btnTagsTarget, navClick} = this.props;
    return (
      <nav className="sidebar">
        <ul>
          <li onClick={navClick} data-section={btnNotesTarget}><a id="btn-notes" href="#"><i className="mdi mdi-note" data-toggle="tooltip" data-placement="right" title="Notes"></i></a></li>
          <li onClick={navClick} data-section={btnNotebooksTarget}><a id="btn-notebooks" href="#"><i className="mdi mdi-book" data-toggle="tooltip" data-placement="right" title="Notebooks"></i></a></li>
          <li onClick={navClick} data-section={btnTagsTarget}><a id="btn-tags" href="#"><i className="mdi mdi-tag" data-toggle="tooltip" data-placement="right" title="Tags"></i></a></li>
        </ul>
      </nav>
      );
    }
  }; 

  export default NavSide;