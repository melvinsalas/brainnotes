import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

class SectionPanel extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render () {
    const { panel, sectionTitle, displayContent } = this.props,
          {title} = panel;
    let value = null;

    switch (sectionTitle) {
      case 'Notes':
        value =  <div onClick={()=>{displayContent(panel)}} className="note rounded"> { title } </div> ;
        break;
      default:
        value = (<div className="panel panel-default">
            <div className="panel-body"> { title } </div>
            <div className="panel-footer clearfix">
              <div className="pull-right btn-group" role='group'>
                <button onClick={''} className="btn btn-default btn-warning btn-xs">
                  <i className="mdi mdi-pencil"></i>
                </button>
                <button onClick={''} className="btn btn-default btn-danger btn-xs">
                  <i className="mdi mdi-delete"></i>
                </button>
              </div>
              <div className="pull-right btn-group" role='group'>
                <button onClick={''} className="btn btn-default btn-success btn-xs">
                  <i className="mdi mdi-content-save"></i>
                </button>
                <button onClick={''} className="btn btn-default btn-danger btn-xs">
                  <i className="mdi mdi-cancel"></i>
                </button>
              </div>
            </div>
          </div>);
    }

    return (
        <div> <Link to='/notes/potato'> { value } </Link> </div>
    );
  }
}

export default SectionPanel;