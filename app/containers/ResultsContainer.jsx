import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/GithubHelpers';
import UserDetails from './UserDetails.jsx';

export default class ResultsContainer extends React.Component {
  static context

  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      scores: []
    };
    _.bindAll(this, [
      'setScores'
    ])
  }

  componentDidMount() {
    new GithubHelpers({usersInfo: this.props.location.state.usersInfo})
      .battle()
      .then(this.setScores)
  }

  results() {
    return this.props.location.state
  }

  setScores(scores) {
    this.setState({
      scores: scores,
      isLoading: false
    })
  }

  render() {
    let usersInfo = this.props.location.state.usersInfo;
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>Results</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetails
            key="player_one_details"
            score={this.state.scores[0]}
            info={usersInfo[0]}
            header='Player one'
          />
          <UserDetails
            key="player_two_details"
            score={this.state.scores[1]}
            info={usersInfo[1]}
            header='Player two'
          />
        </div>
      </div>
    )
  }
}
