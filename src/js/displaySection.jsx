import React from 'react';
import { render } from 'react-dom';

class DisplaySection extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const { activeNote, editable, deleteNote, startEdit, saveEdit, cancelEdit, handleTitleChange, handleContentChange } = this.props;
        return (
            <div id="section-main" className="col-sm-9 section hidden-xs">
                <div id="panel-editable" className={"panel panel-default " + ((editable) ? "editable" : "")}>
                    <div className="panel-heading clearfix">
                        <div id="save-cancel-group" className={"btn-group pull-right " + ((!editable) ? "hide" : "")}>
                            <a onClick={saveEdit} href="#" data-toggle="tooltip" data-placement="bottom" title="Save" id="btn-edit-save-notes" className="btn btn-default btn-success"><i className="mdi mdi-content-save"> </i></a>
                            <a onClick={cancelEdit} href="#" data-toggle="tooltip" data-placement="bottom" title="Cancel" id="btn-edit-cancel-notes" className="btn btn-default btn-danger"><i className="mdi mdi-cancel"> </i></a>
                        </div>
                        <div
                            className={"btn-group pull-right " + ((editable || !activeNote) ? "hide" : "")}>
                            <a onClick={startEdit} href="#" data-toggle="tooltip" data-placement="bottom" title="Edit" id="btn-edit-notes" className="btn btn-default btn-warning"><i className="mdi mdi-pencil"> </i></a>
                            <a onClick={deleteNote} href="#" data-toggle="tooltip" data-placement="bottom" title="Delete" id="btn-delete-notes" className="btn btn-default btn-danger"><i className="mdi mdi-delete"> </i></a>
                        </div>
                        <a className="btn btn-default pull-left hidden-lg hidden-md hidden-sm">
                            <i className="mdi mdi-chevron-left"></i>
                        </a>
                        <input
                            className="panel-title panel-note-title pull-left heading-editable form-control"
                            onChange={handleTitleChange} value={(!!activeNote) ? activeNote.title : ''}
                            readOnly={!editable} />
                    </div>
                    <div id="display-note-content" className="panel-body section-display body-editable">
                        <textarea onChange={handleContentChange} value={(!!activeNote) ? activeNote.content : ' '} className="editable" readOnly={!editable}></textarea>
                    </div>
                    <div className="panel-footer">
                        <i className="mdi mdi-tag"></i>
                        <span>Tags: </span>
                        <span className="label label-default">Default</span>
                        <span className="label label-primary">Primary</span>
                        <span className="label label-success">Success</span>
                        <span className="label label-info">Info</span>
                        <span className="label label-warning">Warning</span>
                        <span className="label label-danger">Danger</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplaySection;