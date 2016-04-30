import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import MainContainer from './MainContainer.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>What even is a jQuery?</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
}
