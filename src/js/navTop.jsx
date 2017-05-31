import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

class NavTop extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render (){
    const {btnNotesTarget, btnNotebooksTarget, btnTagsTarget, navClick} = this.props;
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <a className="navbar-brand" href="#">
              <img alt="Brand" height="50px" width="50px" src="./src/img/logo.png"/>
              <span>Brain Notes</span> 
              </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to='/notes'><span>Notes</span></Link></li>
              <li><Link to='/notebooks'><span>Notebooks</span></Link></li>
              <li><Link to='/tags'><span>Tags</span></Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-account"></i>
                <span> Account</span>
                <span className="caret"></span>
              </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Settings</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
  }; 

  export default NavTop;