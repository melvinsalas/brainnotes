import React from 'react';
import { render } from 'react-dom';

class SectionPanel extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render () {
    const panelObject = this.props.panelObject;
    const { title, displayContent } = panelObject;
    return (
        <div onClick={()=>displayContent(panelObject)} className="panel panel-default">
            <div className="panel-body">{title}</div>
        </div>
      );
    }
  }

export default SectionPanel;