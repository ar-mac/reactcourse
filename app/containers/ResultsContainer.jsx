import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import GithubHelpers from '../utils/HelpersForGithub';
import UserDetails from '../components/UserDetails.jsx';
import Users from '../components/UserDetails.jsx';
import LoadingPrompt from '../components/LoadingPrompt.jsx';

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
      'setScores',
      'getHeaders',
      'infoTable'
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

  infoTable() {
    return (
      <UsersInfoTable
        usersInfo={this.props.location.state.usersInfo}
        header="Results"
        userHeaders={this.state.headers}
        scores={this.state.scores}
      >
        <ButtonForRestart />
      </UsersInfoTable>
    )
  }

  render() {
    return (
      <div>
        { this.state.isLoading ? <LoadingPrompt /> : this.infoTable() }
      </div>
    )
  }
}

let ButtonForRestart = () => {
  return(
    <div className="col-sm-12">
      <Link to="/playerOne">
        <button className="btn btn-lg btn-primary">Start another battle</button>
      </Link>
    </div>
  )
}
