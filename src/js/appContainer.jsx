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
        },
        notebookSection: {
          id: 'section-notebooks',
          sectionTitle: 'NoteBooks',
        },
        tagSection: {
          id: 'section-tags',
          sectionTitle: 'Tags',
        }
      },
      setNotes: this.setNotes.bind(this),
      setNotebooks: this.setNotebooks.bind(this),
      setTags: this.setTags.bind(this),
      data: {
        notes: [
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
        ],
        notebooks: [
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
        ],
        tags: [
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
        ],
      }
    }

    const { setNotes, setNotebooks, setTags } = this.state;

    axios.get('http://localhost:3000/notes')
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setNotes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
    if (!!this.state.activeNote) {
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

  setNotes(pData) {
    this.state.data.notes = pData;
  }

  setNotebooks(pData) {
    this.state.data.notebooks = pData;
  }

  setTags(pData) {
    this.state.data.tags = pData;
  }

  render() {
    const { navSettings, displaySettings, activeSection, activeNote, sections, data} = this.state,
      { navClick } = navSettings,
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
          data={data}
        />
      </div>
    );
  }
};

// AppContainer.propTypes = {
// }

export default AppContainer;