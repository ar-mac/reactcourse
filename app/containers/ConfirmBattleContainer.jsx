import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/GithubHelpers';
import PlayersInfoTable from './PlayersInfoTable.jsx';
import LoadingPrompt from './LoadingPrompt.jsx';

export default class ConfirmBattleContainer extends React.Component {
  static ContextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      playersInfo: []
    };
  }

  componentDidMount() {
    let query = this.props.location.query
    new GithubHelpers({userNames: [query.playerOne, query.playerTwo]})
      .getUsersInfo()
      .then(playersInfo => {
        this.setState({
          playersInfo: playersInfo
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.playersInfo.length
            ? <PlayersInfoTable playersInfo={this.state.playersInfo}/>
            : <LoadingPrompt />
          }
      </div>
    )
  }
}
