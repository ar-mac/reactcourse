import React, { PropTypes } from 'react';
import _ from 'lodash';
import GithubHelpers from '../utils/HelpersForGithub';
import UsersInfoTable from '../components/UsersInfoTable.jsx';
import LoadingPrompt from '../components/LoadingPrompt.jsx';

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


let ButtonsForInitiate = (props) => {
  return(
    <div className='col-sm-8 col-sm-offset-2'>
      <div className='col-sm-12'>
        <button type="button" className="btn btn-lg btn-success" onClick={props.initiateBattle}>
          Initiate battle
        </button>
      </div>
      <div className='col-sm-12'>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-danger">ReselectPlayers</button>
        </Link>
      </div>
    </div>
  );
}

ButtonsForInitiate.propTypes = {
  initiateBattle: PropTypes.func.isRequired
}
