import React, { PropTypes } from 'react';

export default (props) => {
    return(
      <div className="jumbotron col-sm-12 text-center">
        {props.children}
      </div>
    );
}
