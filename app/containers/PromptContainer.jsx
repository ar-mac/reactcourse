import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class PromptContainter extends React.Component {
  static PropTypes = {

  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      userName: ''
    };
    _.bindAll(this, [
      'updateUser',
      'submitUser'
    ])
  }

  updateUser() {
    this.setState({userName: userNameInput.value})
  }

  submitUser(e) {
    e.preventDefault()
    let userName = this.state.userName
    this.setState({userName: ''})

    if (this.props.routeParams) {
    //  render battle
    } else {
    // render player two
    }
  }

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.submitUser}>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='Github Username'
                type='text'
                onChange={this.updateUser}
                value={this.state.username}
                id="userNameInput"
              />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
