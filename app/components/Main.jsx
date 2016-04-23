import React, { PropTypes } from 'react';
import { Link } from 'react-router'

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Link to="/">
          <button className="btn btn-block btn-success">Back to home</button>
        </Link>
        {this.props.children}
      </div>
    )
  }
}
