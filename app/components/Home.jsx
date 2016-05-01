import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import MainContainer from './MainContainer.jsx';
import Articlex from '../containers/Articlex.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <Articlex />
      </MainContainer>
    )
  }
}
          //article={this.stub_article}
