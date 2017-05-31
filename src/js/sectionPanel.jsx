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
        value = <div className="panel panel-default"><div className="panel-body"> { title } </div></div>;
    }

    return (
        <div> <Link to='/notes/potato'> { value } </Link> </div>
    );
  }
}

export default SectionPanel;