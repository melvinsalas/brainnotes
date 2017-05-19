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
          <li><a id="btn-notes" href="#" onClick={navClick} data-section={btnNotesTarget}><i className="mdi mdi-note" data-toggle="tooltip" data-placement="right" title="Notes"></i></a></li>
          <li><a id="btn-notebooks" href="#" onClick={navClick} data-section={btnNotebooksTarget}><i className="mdi mdi-book" data-toggle="tooltip" data-placement="right" title="Notebooks"></i></a></li>
          <li><a id="btn-tags" href="#" onClick={navClick} data-section={btnTagsTarget}><i className="mdi mdi-tag" data-toggle="tooltip" data-placement="right" title="Tags"></i></a></li>
        </ul>
      </nav>
      );
    }
  }; 

  export default NavSide;