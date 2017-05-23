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
  }

  render() {
    const { activeSection, activeNote, displaySettings, sections, data} = this.props,
      { editable, startEdit, saveEdit, cancelEdit, handleTitleChange, handleContentChange } = displaySettings,
      { noteSection, notebookSection, tagSection } = sections;
    return (
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div id="section-side" className="col-sm-3 transition section">
              <div className="row">
                <Section
                  key={noteSection.id}
                  displayed={!(activeSection == noteSection.id)}
                  {...noteSection}
                  data={data.notes}
                />
                <Section
                  key={notebookSection.id}
                  displayed={!(activeSection == notebookSection.id)}
                  {...notebookSection}
                  data={data.notebooks}
                />
                <Section
                  key={tagSection.id}
                  displayed={!(activeSection == tagSection.id)}
                  {...tagSection}
                  data={data.tags}
                />
              </div>
            </div>

            <DisplaySection
              activeNote={activeNote}
              editable={editable}
              startEdit={startEdit}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              handleTitleChange={handleTitleChange}
              handleContentChange={handleContentChange}
            />
          </div>

        </div>
      </main>
    );
  }
};

// MainContainer.propTypes = {
// }

export default MainContainer;