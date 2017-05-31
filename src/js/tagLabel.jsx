import React from 'react';
import { render } from 'react-dom';

class TagLabel extends React.Component {
  constructor () {
    super();
    this.state = { }
  }

  render () {
    const {tagId, tags} = this.props;
    var label = <span></span>;
    {tags.filter((pTag) => {
      return (pTag._id == tagId)
    }).map((tag) => {
      label = <span className="label label-primary">{tag.title}</span>;
    })}
    return(label)
    }
  }; 

  export default TagLabel;