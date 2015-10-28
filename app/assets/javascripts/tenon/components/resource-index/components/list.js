import React, { Component, PropTypes } from 'react';
import addons from 'react/addons'
import Record from '../components/record';
import LoadMoreButton from '../components/load-more-button';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

export default class List extends Component {
  render() {
    return(
      <div className="main-content">
        <ul className="record-list">
          <ReactCSSTransitionGroup transitionName="record" transitionEnterTimeout={250} transitionLeaveTimeout={250} >
            {this.props.records.map((record, i) =>
              <Record {...record}
                key={i}
                onDelete={(e) => this._handleDelete(e, record)} />
            )}
          </ReactCSSTransitionGroup>
        </ul>

        <LoadMoreButton
          title={this.props.title}
          loadAction={(e) => this._loadNextPage(e)}
          pagination={this.props.pagination} />
      </div>
    )
  }

  _handleDelete(e, record) {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.actions.deleteRecord(record);
    }
  }

  _loadNextPage(e) {
    e.preventDefault();
    this.props.actions.loadNextPage();
  }
}