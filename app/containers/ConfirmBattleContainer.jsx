import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/GithubHelpers'

export default class ConfirmBattleContainer extends React.Component {
  static ContextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      playersInfo: []
    };
  }

  componentDidMount() {
    let query = this.props.location.query
    new GithubHelpers({userNames: [query.playerOne, query.playerTwo]})
      .getUsersInfo()
      .then(playersInfo => {
        this.setState({
          isLoading: false,
          playersInfo: playersInfo
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.isLoading
          ? 'LOADING'
          : <pre>{JSON.stringify(this.state.playersInfo, null, ' ')}</pre> }
      </div>
    )
  }
}
