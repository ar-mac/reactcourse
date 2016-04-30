import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/HelpersForGithub';
import UsersInfoTable from './UsersInfoTable.jsx';
import LoadingPrompt from './LoadingPrompt.jsx';

export default class ConfirmBattleContainer extends React.Component {
  static ContextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      usersInfo: []
    };
  }

  componentDidMount() {
    let query = this.props.location.query
    new GithubHelpers({userNames: [query.playerOne, query.playerTwo]})
      .getUsersInfo()
      .then(usersInfo => {
        this.setState({
          usersInfo: usersInfo
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.usersInfo.length
            ? <UsersInfoTable usersInfo={this.state.usersInfo}/>
            : <LoadingPrompt />
          }
      </div>
    )
  }
}
