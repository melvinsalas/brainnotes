import React from 'react';
import { render } from 'react-dom';

import NavTop from './navTop';
import NavSide from './navSide';
import MainContainer from './main';

class AppContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      activeSection: 'section-notes',
      sections: [
        {
          id: 'section-notes',
          sectionTitle: 'Notes',
          sectionPanels: [
            {
              title: 'First Title',
              content: 'First Content'
            },
            {
              title: 'Second Title',
              content: 'Second Content'
            }
          ]
        },
        {
          id: 'section-notebooks',
          sectionTitle: 'NoteBooks',
          sectionPanels: [
            {
              title: 'First Title',
              content: 'First Content'
            },
            {
              title: 'Second Title',
              content: 'Second Content'
            }
          ]
        },
        {
          id: 'section-tags',
          sectionTitle: 'Tags',
          sectionPanels: [
            {
              title: 'First Title',
              content: 'First Content'
            },
            {
              title: 'Second Title',
              content: 'Second Content'
            }
          ]
        }
      ],
      navClick: this.navClick.bind(this)
    }
  }

  navClick (e) {
    console.log("Clicked Nav");
    console.log(e.target.dataSection);
    setState({
      activeSection: e.target.dataSection
    });
  }

   render () {
     const { sections, activeSection, navClick } = this.state,
           noteSectionId = sections[0].id,
           notebookSectionId = sections[1].id,
           tagSectionId = sections[2].id;
    return (
      <div>
        <NavTop
          navClick={navClick}
          btnNotesTarget={noteSectionId}
          btnNotebooksTarget={notebookSectionId}
          btnTagsTarget={tagSectionId}
        />
        <NavSide/>
        <MainContainer
          activeSection={activeSection}
          sections={sections}
        />
      </div>
    );
  }
}; 

AppContainer.propTypes = {
  
}

export default AppContainer;