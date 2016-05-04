import React, { PropTypes } from 'react';
import _ from 'lodash';

window.stub_article = {
  id: 46,
  title: 'Rerum Eos',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis egestas ullamcorper. ' +
  'Maecenas non aliquet lectus. Nunc ornare nisi sit amet lorem auctor lobortis. ' +
  'Proin in purus lobortis, sodales nisi nec, hendrerit nisi. ' +
  'Nunc non augue in est sodales faucibus in quis odio. ' +
  'In hac habitasse platea dictumst. Integer quis condimentum leo.'
}

export default class Articlex extends React.Component {
  static PropTypes = {
    article: PropTypes.object
  }

  static defaultProps = {
    article: window.stub_article
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      commentText: ''
    };

    _.bindAll(this, [
      'getCommentText'
    ])
  }

  getCommentText() {
    this.setState({commentText: new_comment.value})
  }

  render() {
    return (
      <div className="new_comment__form">
        <input id="new_comment" ref="new_comment_input"/>

        <button onClick={this.getCommentText}>Get Comment Text</button>

        <span>Captured comment value: {this.state.commentText}</span>
      </div>
    )
  }
}

import React, { PropTypes } from 'react';

export class Chat extends React.Component {
  static PropTypes = {
  };

  render() {
    return(
      <div>
        <MessagesList/>
        <NewMessage/>
      </div>
    );
  }
}
