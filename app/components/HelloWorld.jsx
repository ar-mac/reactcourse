import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
  render() {
    return(
      <div>
        HelloWorld
      </div>  
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
