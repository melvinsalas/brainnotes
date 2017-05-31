import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

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
          <li><Link to='/notes' ><i className="mdi mdi-note" data-toggle="tooltip" data-placement="right" title="Notes"></i></Link></li>
          <li><Link to='/notebooks'><i className="mdi mdi-book" data-toggle="tooltip" data-placement="right" title="Notebooks"></i></Link></li>
          <li><Link to='/tags'><i className="mdi mdi-tag" data-toggle="tooltip" data-placement="right" title="Tags"></i></Link></li>
        </ul>
      </nav>
      );
    }
  }; 

  export default NavSide;