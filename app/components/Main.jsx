import React, { PropTypes } from 'react';
import { Link } from 'react-router'

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
}
