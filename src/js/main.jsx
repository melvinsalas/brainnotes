import React from 'react';
import { render } from 'react-dom';

import Section from './section';
import DisplaySection from './displaySection';

//const {string} = React.PropTypes;

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    }

  render() {
    const { activeSection, activeNote, displaySettings, sections } = this.props,
      { editable, startEdit } = displaySettings,
      { noteSection, notebookSection, tagSection } = sections;
    return (
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div id="section-side" className="col-sm-3 transition section">
              <div className="row">
                <Section
                  key={noteSection.id}
                  display={!(activeSection == noteSection.id)}
                  {...noteSection}
                />
                <Section
                  key={notebookSection.id}
                  display={!(activeSection == notebookSection.id)}
                  {...notebookSection}
                />
                <Section
                  key={tagSection.id}
                  display={!(activeSection == tagSection.id)}
                  {...tagSection}
                />
              </div>
            </div>

            <DisplaySection
              activeNote={activeNote}
              editable={editable}
              startEdit={startEdit}
            />
          </div>

        </div>
      </main>
    );
  }
};

MainContainer.propTypes = {

}

export default MainContainer;