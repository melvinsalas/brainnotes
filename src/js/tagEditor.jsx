import React from 'react';
import { render } from 'react-dom';

class TagEditor extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    tagEditorHandler(e) {
        this.props.panel.color = e.target.value 
        this.forceUpdate();
    }

    render() {
        const { panel, colors } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="radio-toolbar">
                        { colors.map((color) => {
                            return (
                                <span key = { `${panel._id}-${color._id}` }>
                                    <input type = "radio" 
                                        id = { `${panel._id}-${color._id}` }
                                        name = { `${panel._id}` } 
                                        value = { color._id } 
                                        checked = { panel.color === color._id }
                                        onChange = { this.tagEditorHandler.bind(this) } />
                                    <label htmlFor = { `${panel._id}-${color._id}` }>
                                        <span className = { `label label-${color.class}` } >
                                            { 
                                                (panel.color == color._id && <i className = "mdi mdi-checkbox-blank-circle"></i>) 
                                                || <i className = "mdi mdi-radiobox-blank"></i> 
                                            }
                                        </span>
                                    </label>
                                </span>
                            )
                        } ) }
                    </div>
                </div>
                <div className="panel-body">
                    <input type="text" className='panel-title panel-note-title heading-editable form-control' onChange = {function (){}} value = { panel.title } />
                </div>
                <div className="panel-footer clearfix">
                    <div className="pull-right btn-group" role='group'>
                        <button onClick={''} className="btn btn-default btn-warning btn-xs">
                            <i className="mdi mdi-pencil"></i>
                        </button>
                        <button onClick={''} className="btn btn-default btn-danger btn-xs">
                            <i className="mdi mdi-delete"></i>
                        </button>
                    </div>
                    <div className="pull-right btn-group" role='group'>
                        <button onClick={''} className="btn btn-default btn-success btn-xs">
                            <i className="mdi mdi-content-save"></i>
                        </button>
                        <button onClick={''} className="btn btn-default btn-danger btn-xs">
                            <i className="mdi mdi-cancel"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    };
}

export default TagEditor;