import React from 'react';
import { render } from 'react-dom';

import SectionPanel from './sectionPanel';

class Section extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    const { id, sectionTitle, array, data, displayContent, newNote, displayed } = this.props;
    return (
        <div id={id} className={"col-md-12 transition " + ((displayed)?"hide2":"")}>
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h4 className="panel-title pull-left">{sectionTitle}</h4>
                    <div className="btn-group pull-right">
                        <a onClick={newNote} href="#" id="btn-new-notes" className="btn btn-success"><i className="mdi mdi-plus"> </i></a>
                    </div>
                </div>
                <div id="holder-notes" className="panel-body section-notes">
                    {array.map((panel)=>{
                        return (
                            <SectionPanel 
                                data = { data }
                                key = { panel._id }
                                sectionTitle = { sectionTitle }
                                displayContent = { displayContent }
                                panel = { panel }
                            />
                        )
                    })}
                </div>
            </div>
        </div>
      );
    }
  }

  export default Section;