import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { Switch } from 'react-router';

import Section from './section';
import DisplaySection from './displaySection';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
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
                <Route exact path='/' render={(props) => (<Redirect to="/notes"/>)}/>
                
                <Route path = "/notes" render = { (props) => (
                  <Section
                    key = { noteSection.id }
                    displayed = { false }
                    { ...noteSection }
                    array = { data.notes } 
                    data = { data }/>
                )}/>
                <Route path = "/notebooks" render = { (props) => (
                  <Section
                    key = {notebookSection.id}
                    displayed = { false }
                    {...notebookSection}
                    array = { data.notebooks }
                    data = { data } />
                )}/>
                <Route path = "/tags" render = { (props) => (
                  <Section
                    key = {tagSection.id}
                    displayed = { false }
                    {...tagSection}
                    array = { data.tags }
                    data = { data }/>
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
              showMobileNote={showMobileNote}
            />
          </div>
        </div>
      </main>
    );
  }
};

export default MainContainer;