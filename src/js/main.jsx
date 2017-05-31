import React from 'react';
import { render } from 'react-dom';

import Section from './section';
import DisplaySection from './displaySection';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Switch } from 'react-router'

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = { }
  }
  render() {
    const { activeSection, activeNote, displaySettings, sections, data } = this.props,
      { editable, startEdit, saveEdit, cancelEdit, handleTitleChange, handleContentChange } = displaySettings,
      { noteSection, notebookSection, tagSection } = sections;
    return (
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div id="section-side" className="col-sm-3 transition section">
              <div className = "row">
                <Route exact path = "/notes" render = { (props) => (
                  <Section
                    key = { noteSection.id }
                    displayed = { false }
                    { ...noteSection }
                    data = { data.notes } />
                )}/>
                <Route exact path = "/notebooks" render = { (props) => (
                  <Section
                    key = {notebookSection.id}
                    displayed = { false }
                    {...notebookSection}
                    data = {data.notebooks} />
                )}/>
                <Route exact path = "/tags" render = { (props) => (
                  <Section
                    key = {tagSection.id}
                    displayed = { false }
                    {...tagSection}
                    data = {data.tags}/>
                )}/>
              </div>
            </div>
            <DisplaySection
              activeNote = {activeNote}
              editable = {editable}
              startEdit = {startEdit}
              saveEdit= {saveEdit}
              cancelEdit= {cancelEdit}
              handleTitleChange = {handleTitleChange}
              handleContentChange = {handleContentChange} />
          </div>
        </div>
      </main>
    );
  }
};

export default MainContainer;