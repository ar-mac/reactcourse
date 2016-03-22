let USER_DATA = {
  name: 'Arek',
  userName: 'pokiujf',
  image: 'https://avatars0.githubusercontent.com/u/8201574'
};

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export class ProfilePic extends React.Component {
  static PropTypes = {
    imageUrl: PropTypes.string.isRequired
  };
  
  render() {
    return(
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    );
  }
}

export class ProfileName extends React.Component {
  static PropTypes = {
    name: PropTypes.string.isRequired
  };
  
  render() {
    return(
      <span>{this.props.name}</span>
    );
  }
}

export class ProfileLink extends React.Component {
  static PropTypes = {
    userName: PropTypes.string.isRequired
  };
  
  render() {
    return(
      <a href={`https://www.github.com/${this.props.userName}`}>{this.props.userName}</a>
    );
  }
}

export default class Avatar extends React.Component {
  static PropTypes = {
    user: PropTypes.object.isRequired
  };
  
  render() {
    return(
      <div>
        <div><ProfileName name={this.props.user.name} /></div>
        <div><ProfilePic imageUrl={this.props.user.image} /></div>
        <div><ProfileLink userName={this.props.user.userName} /></div>
      </div>  
    );
  }
}

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));