import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import UserDetails from './UserDetails.jsx';

export default class PlayersInfoTable extends React.Component {
  static PropTypes = {

  };

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
    _.bindAll(this, [
      'initiateBattle'
    ])
  }

  initiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetails
            key="player_one_details"
            info={this.props.playersInfo[0]}
            header='Player one'
          />
          <UserDetails
            key="player_two_details"
            info={this.props.playersInfo[1]}
            header='Player two'
          />
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12'>
            <button type="button" className="btn btn-lg btn-success" onClick={this.initiateBattle}>
              Initiate battle
            </button>
          </div>
          <div className='col-sm-12'>
            <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-danger">ReselectPlayers</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
