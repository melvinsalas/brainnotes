import React from 'react';
import { render } from 'react-dom';

import NavTop from './navTop';
import NavSide from './navSide';
import MainContainer from './main';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSection: 'section-notes',
      activeNote: null,
      activeNoteBackUp: null,
      navSettings: {
        navClick: this.navClick.bind(this)
      },
      displaySettings: {
        editable: false,
        startEdit: this.startEdit.bind(this),
        handleTitleChange: this.handleTitleChange.bind(this),
        handleContentChange: this.handleContentChange.bind(this),
        saveEdit: this.saveEdit.bind(this),
        cancelEdit: this.cancelEdit.bind(this),
        deleteNote: this.deleteNote.bind(this)
      },
      sections: {
        noteSection: {
          id: 'section-notes',
          displayContent: this.setActiveNote.bind(this),
          newNote: this.newNote.bind(this),
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

  handleTitleChange(e) {
    this.state.activeNote.title = e.target.value;
    this.forceUpdate();
  }
  handleContentChange(e) {
    this.state.activeNote.content = e.target.value;
    this.forceUpdate();
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
    console.log("setActiveNote");
    if (!!this.state.activeNote) {
      this.cancelEdit();
    }
    this.setState({
      activeNote: pNote,
      activeNoteBackUp: JSON.stringify(pNote)
    });
  }

  newNote() {
    console.log("newNote");
    let noteTemp = {
      _id: null,
      title: "New",
      content: "Potato",
      notebook: "",
      tags: []
    }
    this.setState({activeNote:noteTemp}, this.startEdit.bind(this));
  }

  deleteNote() {
    let self = this;
    let noteList = this.state.data.notes;
    let {activeNote} = this.state;

    console.log("deleteNote");

    axios.delete('http://localhost:7777/api/notes', {
      params: {_id:activeNote._id}
    })
      .then(function (response) {
        console.log(noteList.indexOf(activeNote));
        noteList.splice(noteList.indexOf(activeNote), 1);
        self.forceUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  startEdit() {
    console.log("startEdit");
    if (!!this.state.activeNote) {
      this.state.displaySettings.editable = true;
      this.forceUpdate();
    }
  }
  
  saveEdit() {
    console.log("saveEdit");
    let {activeNote} = this.state,
          self = this;
    
    if (!!activeNote._id) {
      axios.put('http://localhost:7777/api/notes', activeNote)
      .then(function (response) {
        console.log(response.data);    
        self.state.activeNoteBackUp = JSON.stringify(response.data);
        self.stopEdit();
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      delete activeNote._id;
      axios.post('http://localhost:7777/api/notes', activeNote)
      .then(function (response) {
        console.log(response.data);    
        self.setActiveNote(response.data);
        self.state.data.notes.push(response.data);
        self.stopEdit();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  cancelEdit() {
    console.log("cancelEdit");
    if (!!this.state.activeNote._id) {
      Object.assign(this.state.activeNote, JSON.parse(this.state.activeNoteBackUp));
    } else {
      this.setState({
        activeNote: null,
        activeNoteBackUp: null
      });
    }
      this.stopEdit();
      this.forceUpdate();
  }

  stopEdit(){
    this.state.displaySettings.editable = false;
    this.forceUpdate();
  }

  componentWillMount() {
    this.summon('notes');
    this.summon('notebooks');
    this.summon('tags');
  }

  summon(sCollection) {
    let self = this;

    axios.get(`http://localhost:7777/api/${sCollection}`)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.state.data[sCollection] = response.data;
        self.forceUpdate();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    // axios.put('http://localhost:7777/api/notes', {
    //     _id: '592c93886e33392a88d4ea1a',
    //     title: 'Pokemon title',
    //     content: 'Pokemon Content'
    // })
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    
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