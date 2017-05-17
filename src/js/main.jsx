import React from 'react';
import { render } from 'react-dom';

const MainContainer = React.createClass({
  render: function(){
    return (
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div id="section-side" className="col-sm-3 transition section">
              <div className="row">
                <div id="section-notes" className="col-md-12 transition">
                  <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                      <h4 className="panel-title pull-left">Notes</h4>
                      <div className="btn-group pull-right">
                        <a href="#" id="btn-new-notes" className="btn btn-success"><i className="mdi mdi-plus"> </i></a>
                      </div>
                    </div>
                    <div id="holder-notes" className="panel-body section-notes">

                    </div>
                  </div>
                </div>
                <div id="section-notebooks" className="col-md-12 hide2 transition">
                  <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                      <h4 className="panel-title pull-left">Notebooks</h4>
                      <div className="btn-group pull-right">
                        <a href="#" className="btn btn-success"><i className="mdi mdi-plus"> </i></a>
                      </div>
                    </div>
                    <div className="panel-body section-notes">
                      <div className="panel panel-default">
                        <div className="panel-body">Notebook 1</div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">Notebook 2</div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">Notebook 3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section-tags" className="col-md-12 hide2 transition">
                  <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                      <h4 className="panel-title pull-left">Tags</h4>
                      <div className="btn-group pull-right">
                        <a href="#" className="btn btn-success"><i className="mdi mdi-plus"> </i></a>
                      </div>
                    </div>
                    <div className="panel-body section-notes">
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <span className="label label-default"><i className="mdi mdi-tag"></i></span> Default
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <span className="label label-primary"><i className="mdi mdi-tag"></i></span> Primary
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <span className="label label-info"><i className="mdi mdi-tag"></i></span> Info
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <span className="label label-warning"><i className="mdi mdi-tag"></i></span> Warning
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <span className="label label-danger"><i className="mdi mdi-tag"></i></span> Danger
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <span className="label label-success"><i className="mdi mdi-tag"></i></span> Success
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="section-main" className="col-sm-9 section hidden-xs">
              <div id="panel-editable" className="panel panel-default">
                  <div className="panel-heading clearfix">
                    <div id="save-cancel-group" className="btn-group pull-right hide">
                      <a href="#" data-toggle="tooltip" data-placement="bottom" title="Save" id="btn-edit-save-notes" className="btn btn-default btn-success"><i className="mdi mdi-content-save"> </i></a>
                      <a href="#" data-toggle="tooltip" data-placement="bottom" title="Cancel" id="btn-edit-cancel-notes" className="btn btn-default btn-danger"><i className="mdi mdi-cancel"> </i></a>
                    </div>
                    <div id="edit-delete-group" className="btn-group pull-right">
                      <a href="#" data-toggle="tooltip" data-placement="bottom" title="Edit" id="btn-edit-notes" className="btn btn-default btn-warning"><i className="mdi mdi-pencil"> </i></a>
                      <a href="#" data-toggle="tooltip" data-placement="bottom" title="Delete" id="btn-delete-notes" className="btn btn-default btn-danger"><i className="mdi mdi-delete"> </i></a>
                    </div>
                    <a id="btn-back" href="#" className="btn btn-default pull-left hidden-lg hidden-md hidden-sm"><i className="mdi mdi-chevron-left"></i></a>
                    <h4 id="display-note-title" className="panel-title pull-left heading-editable" contenteditable="false"> </h4>
                  </div>
                <div id="display-note-content" className="panel-body section-display body-editable" contenteditable="false"> </div>
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
          </div>

        </div>
      </main>
      );
    }
  }); 

  export default MainContainer;