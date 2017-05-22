import React from 'react';
import { render } from 'react-dom';

class DisplaySection extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const { activeNote, editable, startEdit } = this.props;
        return (
            <div id="section-main" className="col-sm-9 section hidden-xs">
                <div id="panel-editable" className="panel panel-default">
                    <div className="panel-heading clearfix">
                        <div id="save-cancel-group" className={"btn-group pull-right " + ((!editable) ? "hide" : "")}>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Save" id="btn-edit-save-notes" className="btn btn-default btn-success"><i className="mdi mdi-content-save"> </i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Cancel" id="btn-edit-cancel-notes" className="btn btn-default btn-danger"><i className="mdi mdi-cancel"> </i></a>
                        </div>
                        <div id="edit-delete-group" className={"btn-group pull-right " + ((editable) ? "hide" : "")}>
                            <a onClick={startEdit} href="#" data-toggle="tooltip" data-placement="bottom" title="Edit" id="btn-edit-notes" className="btn btn-default btn-warning"><i className="mdi mdi-pencil"> </i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Delete" id="btn-delete-notes" className="btn btn-default btn-danger"><i className="mdi mdi-delete"> </i></a>
                        </div>
                        <a id="btn-back" href="#" className="btn btn-default pull-left hidden-lg hidden-md hidden-sm"><i className="mdi mdi-chevron-left"></i></a>
                        <h4 id="display-note-title" className="panel-title pull-left heading-editable" contentEditable={editable}>
                            {
                                (!!activeNote) ? activeNote.title : ' '
                            }
                        </h4>
                    </div>
                    <div id="display-note-content" className="panel-body section-display body-editable">
                        <textarea className="editable">
                        {
                            (!!activeNote) ? activeNote.content : ' '
                        }
                        </textarea>
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