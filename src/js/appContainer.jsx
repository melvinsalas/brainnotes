import React from 'react';
import { render } from 'react-dom';

import NavTop from './navTop';
import NavSide from './navSide';
import MainContainer from './main';
import BasicExample from '../components/commons/sidebar';

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
              id: '0',
              title: 'First Notes Title',
              content: 'First Notes Content'
            },
            {
              id: '1',
              title: 'Second Notes Title',
              content: 'Second Notes Content'
            }
          ]
        },
        {
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
        {
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
      ],
      navClick: this.navClick.bind(this)
    }
  }

  navClick (e) {
    if(e.currentTarget.nodeName == "LI") {
      e.stopPropagation();
      this.setState({
        activeSection: e.currentTarget.dataset.section
      });
    };
    
    
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
        <BasicExample/>
        <NavSide
          navClick={navClick}
          btnNotesTarget={noteSectionId}
          btnNotebooksTarget={notebookSectionId}
          btnTagsTarget={tagSectionId}
        />
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