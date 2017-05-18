import React from 'react';
import { render } from 'react-dom';

class SectionPanel extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }

  render () {
    const { title, section } = this.props;
    let value = null;
    switch (section) {
      case 'Notes':
        value = <div className="note rounded"> { title } </div>;
        break;
      default:
        value = <div className="panel panel-default"><div className="panel-body"> { title } </div></div>;
    }

    return (
        <div> { value } </div>
    );
  }
}

export default SectionPanel;