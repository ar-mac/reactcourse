import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class UserDetails extends React.Component {
  static PropTypes = {
    header: PropTypes.string.isRequired,
    score: PropTypes.number,
    info: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      blog: PropTypes.string,
      company: PropTypes.string,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      location: PropTypes.string,
      login: PropTypes.string.isRequired,
      name: PropTypes.string,
      public_repos: PropTypes.number.isRequired
    })
  };

  render() {
    return (
      <div className='col-sm-6'>
        <p className='lead'>{this.props.header}</p>
        {!!this.props.score && <li className="list-group-item"><h3>Score: {this.props.score}</h3></li>}
        <li className="list-group-item"> <img src={this.props.info.avatar_url} className="img-rounded img-responsive" style={{maxWidth: '200px', maxHeight: '200px', margin: '0 auto'}}/></li>
        {this.props.info.name && <li className="list-group-item">Name: {this.props.info.name}</li>}
        <li className="list-group-item">Username: {this.props.info.login}</li>
        {this.props.info.location && <li className="list-group-item">Location: {this.props.info.location}</li>}
        {this.props.info.company && <li className="list-group-item">Company: {this.props.info.company}</li>}
        <li className="list-group-item">Followers: {this.props.info.followers}</li>
        <li className="list-group-item">Following: {this.props.info.following}</li>
        <li className="list-group-item">Public Repos: {this.props.info.public_repos}</li>
        {this.props.info.blog && <li className="list-group-item">Blog: <a href={this.props.info.blog}> {this.props.info.blog}</a></li>}
      </div>
    )
  }
}
