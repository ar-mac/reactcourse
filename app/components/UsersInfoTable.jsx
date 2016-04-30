import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import UserDetails from '../components/UserDetails.jsx';

export default class PlayersInfoTable extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static PropTypes = {
    usersInfo: PropTypes.array.isRequired,
    usersHeaders: PropTypes.array,
    scores: PropTypes.array
  };

  static DefaultProps = {
    usersHeaders: ['Player One', 'Player Two'],
    scores: [0, 0]
  }

  render() {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>{this.props.header}</h1>
        <div className='col-sm-8 col-sm-offset-2'>

          <UserDetails
            key="player_one_details"
            scores={this.props.scores[0]}
            info={this.props.usersInfo[0]}
            header={this.props.usersHeaders[0]}
          />
          <UserDetails
            key="player_two_details"
            scores={this.props.scores[1]}
            info={this.props.usersInfo[1]}
            header={this.props.usersHeaders[1]}
          />
        </div>
        {this.props.children}
      </div>
    )
  }
}
