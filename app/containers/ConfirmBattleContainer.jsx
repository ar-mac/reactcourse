import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/HelpersForGithub';
import UsersInfoTable from '../components/UsersInfoTable.jsx';
import LoadingPrompt from '../components/LoadingPrompt.jsx';
import ButtonsForInitiate from '../components/ButtonsForInitiate.jsx';

export default class ConfirmBattleContainer extends React.Component {
  static ContextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      usersInfo: []
    };

    _.bindAll(this, [
      'initiateBattle',
      'setUsersInfo',
      'infoTable'
    ])
  }

  componentDidMount() {
    let query = this.props.location.query
    new GithubHelpers({userNames: [query.playerOne, query.playerTwo]})
      .getUsersInfo()
      .then(this.setUsersInfo)
  }

  initiateBattle() {
    const resultsPath = {
      pathname: '/results',
      state: {
        usersInfo: this.props.usersInfo
      }
    };

    this.context.router.push(resultsPath)
  }

  setUsersInfo() {
    this.setState({
      isLoading: false,
      usersInfo: usersInfo
    })
  }

  infoTable() {
    return (
      <UsersInfoTable
        usersInfo={this.state.usersInfo}
        header="Confirm Players"
      >
        <ButtonsForInitiate initiateBattle={this.initiateBattle}/>
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
