import React, { PropTypes } from 'react';

export default class ButtonsForInitiate extends React.Component {
  static PropTypes = {
    initiateBattle: PropTypes.func.isRequired
  };

  render() {
    return(
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12'>
          <button type="button" className="btn btn-lg btn-success" onClick={this.props.initiateBattle}>
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
}
