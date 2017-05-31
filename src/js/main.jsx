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
    const { activeSection, activeNote, displaySettings, sections, data, showMobileNote} = this.props,
      { editable, deleteNote, startEdit, saveEdit, cancelEdit, back, handleTitleChange, handleContentChange } = displaySettings,
      { noteSection, notebookSection, tagSection } = sections;
    return (
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div id="section-side" className={`col-sm-3 transition section ${(showMobileNote ? "hidden-xs" : "")}`}>
              <div className = "row">
                <Route path = "/notes" render = { (props) => (
                  <Section
                    key = { noteSection.id }
                    displayed = { false }
                    { ...noteSection }
                    data = { data.notes } />
                )}/>
                <Route path = "/notebooks" render = { (props) => (
                  <Section
                    key = {notebookSection.id}
                    displayed = { false }
                    {...notebookSection}
                    data = {data.notebooks} />
                )}/>
                <Route path = "/tags" render = { (props) => (
                  <Section
                    key = {tagSection.id}
                    displayed = { false }
                    {...tagSection}
                    data = {data.tags}/>
                )}/>
              </div>
            </div>
            <DisplaySection
              tags={data.tags}
              activeNote={activeNote}
              editable={editable}
              deleteNote={deleteNote}
              startEdit={startEdit}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              back={back}
              handleTitleChange={handleTitleChange}
              handleContentChange={handleContentChange}
              tags={data.tags}
              showMobileNote={showMobileNote}
            />
          </div>
        </div>
      </main>
    );
  }
};

export default MainContainer;