import React from 'react';
import { render } from 'react-dom';

class NotesSection extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render () {
    const { id } = this.props;
    return (
        <div id={id} className="col-md-12 transition">
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h4 className="panel-title pull-left">Notes</h4>
                    <div className="btn-group pull-right">
                        <a href="#" id="btn-new-notes" className="btn btn-success"><i className="mdi mdi-plus"> </i></a>
                    </div>
                </div>
                <div id="holder-notes" className="panel-body section-notes">
                </div>
            </div>
        </div>
      );
    }
  }

  export default NotesSection;