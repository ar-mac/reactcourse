import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class Main extends React.Component {
  static PropTypes = {

  };

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
    _.bindAll(this, [

    ])
  }

  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
}
