import React from 'react';
import { render } from 'react-dom';

import NavTop from './navTop';
import NavSide from './navSide';
import MainContainer from './main';
import BasicExample from '../components/commons/sidebar';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSection: 'section-notes',
      activeNote: null,
      navSettings: {
        navClick: this.navClick.bind(this)
      },
      displaySettings: {
        editable: false,
        startEdit: this.startEdit.bind(this),
        saveEdit: this.saveEdit.bind(this),
        cancelEdit: this.cancelEdit.bind(this)
      },
      sections: {
        noteSection: {
          id: 'section-notes',
          displayContent: this.setActiveNote.bind(this),
          sectionTitle: 'Notes',
          sectionPanels: [
            {
              id: '0',
              title: 'First Notes Title',
              content: 'First Notes Content',
              tags: []
            },
            {
              id: '1',
              title: 'Second Notes Title',
              content: 'Second Notes Content',
              tags: []
            }
          ]
        },
        notebookSection: {
          id: 'section-notebooks',
          sectionTitle: 'NoteBooks',
          sectionPanels: [
            {
              id: '0',
              title: 'First NoteBooks Title',
              content: 'First NoteBooks Content'
            },
            {
              id: '1',
              title: 'Second NoteBooks Title',
              content: 'Second NoteBooks Content'
            }
          ]
        },
        tagSection: {
          id: 'section-tags',
          sectionTitle: 'Tags',
          sectionPanels: [
            {
              id: '0',
              title: 'First Tags Title',
              content: 'First Tags Content'
            },
            {
              id: '1',
              title: 'Second Tags Title',
              content: 'Second Tags Content'
            }
          ]
        }
      },
    }
  }

  navClick(e) {
    if (e.currentTarget.nodeName == "A") {
      e.stopPropagation();
      this.setState({
        activeSection: e.currentTarget.dataset.section
      });
    };
  }

  setActiveNote(pNote) {
    console.log(JSON.stringify(pNote, null, 4));
    this.setState({
      activeNote: pNote
    });
  }

   startEdit() {
    if(!!this.state.activeNote) {
      this.state.displaySettings.editable = true;
      this.forceUpdate();
    }
  }

  saveEdit() {
    console.log("saveEdit");
  }

  cancelEdit() {
    console.log("cancelEdit");
  }

  render() {
    const { navSettings, displaySettings, sections, activeSection, activeNote } = this.state,
      {navClick} = navSettings,
      noteSectionId = sections.noteSection.id,
      notebookSectionId = sections.notebookSection.id,
      tagSectionId = sections.tagSection.id;
    return (
      <div>
        <NavTop
          navClick={navClick}
          btnNotesTarget={noteSectionId}
          btnNotebooksTarget={notebookSectionId}
          btnTagsTarget={tagSectionId}
        />
        <BasicExample/>
        <NavSide
          navClick={navClick}
          btnNotesTarget={noteSectionId}
          btnNotebooksTarget={notebookSectionId}
          btnTagsTarget={tagSectionId}
        />
        <MainContainer
          activeSection={activeSection}
          activeNote={activeNote}
          sections={sections}
          displaySettings={displaySettings}
        />
      </div>
    );
  }
};

AppContainer.propTypes = {

}

export default AppContainer;