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
        handleTitleChange: this.handleTitleChange.bind(this),
        handleContentChange: this.handleContentChange.bind(this),
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
      data: {
        notes: [],
        notebooks: [],
        tags: [],
      }
    }

    // const { setNotes, setNotebooks, setTags } = this.state;

    // axios.get('http://localhost:3000/notes')
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     setNotes(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // axios.put('http://localhost:3000/tags/5',
    //   {
    //     "title": "The Discovery of India 33",
    //     "color": 5,
    //     "id": 5
    //   }
    // )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
    if (!!this.state.activeNote) {
      this.cancelEdit();
    }
    console.log(JSON.stringify(pNote, null, 4));
    this.setState({
      activeNote: pNote,
      activeNoteBackUp: JSON.stringify(pNote)
    });
  }

  startEdit() {
    if (!!this.state.activeNote) {
      this.state.displaySettings.editable = true;
      this.forceUpdate();
    }
  }

  handleTitleChange(e) {
    this.state.activeNote.title = e.target.value;
    this.forceUpdate();
  }
  handleContentChange(e) {
    this.state.activeNote.content = e.target.value;
    this.forceUpdate();
  }

  saveEdit() {
    console.log("saveEdit");
    axios.put('http://localhost:3000/tags/5',
      {
        "title": "The Discovery of India 33",
        "color": 5,
        "id": 5
      }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  cancelEdit() {
    console.log("cancelEdit");
    Object.assign(this.state.activeNote, JSON.parse(this.state.activeNoteBackUp));
    this.stopEdit();
    this.forceUpdate();
  }

  stopEdit(){
    this.state.displaySettings.editable = false;
    this.forceUpdate();
  }

  componentWillMount() {
    let self = this;

    axios.get('http://localhost:3000/db')
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(self);
        self.setState({
          data: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { navSettings, displaySettings, activeSection, activeNote, sections, data } = this.state,
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