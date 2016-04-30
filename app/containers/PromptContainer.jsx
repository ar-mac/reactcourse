import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class PromptContainter extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      userName: ''
    };
    _.bindAll(this, [
      'updateUser',
      'submitUser',
      'playerTwoRoute',
      'battleRoute'
    ])
  }

  componentWillReceiveProps() {
    this.setState({userName: ''})
  }

  updateUser() {
    this.setState({userName: userNameInput.value})
  }

  submitUser(e) {
    e.preventDefault()
    const playerOneRoute = this.props.route.path == 'playerOne';
    const route = playerOneRoute ? this.playerTwoRoute() : this.battleRoute()

    this.context.router.push(route)
  }

  playerTwoRoute() {
    return ({
      pathname: `/playerTwo/${this.state.userName}`
    })
  }

  battleRoute() {
    return ({
      pathname: '/battle',
      query: {
        playerOne: this.props.routeParams.playerOne,
        playerTwo: this.state.userName
      }
    })
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
                value={this.state.userName}
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
