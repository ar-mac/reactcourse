import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/HelpersForGithub';
import UserDetails from './UserDetails.jsx';

export default class ResultsContainer extends React.Component {
  static context

  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      scores: [],
      headers: ['', '']
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

  setScores(scores) {
    this.setState({
      scores: scores,
      isLoading: false,
      headers: this.getHeaders(scores)
    })
  }

  getHeaders(scores) {
    let headers = ['Winner', 'Loser']
    if (scores[0] < scores[1]) _.reverse(headers)
    if (scores[0] === scores[1]) headers = ['Draw', 'Draw']
    return headers
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
            header={this.state.headers[0]}
          />
          <UserDetails
            key="player_two_details"
            score={this.state.scores[1]}
            info={usersInfo[1]}
            header={this.state.headers[1]}
          />
        </div>
      </div>
    )
  }
}
