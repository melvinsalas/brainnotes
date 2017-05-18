import React from 'react';
import { render } from 'react-dom';

class SectionPanel extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render () {
    const { title } = this.props;
    return (
        <div className="panel panel-default">
            <div className="panel-body">{title}</div>
        </div>
      );
    }
  }

export default SectionPanel;