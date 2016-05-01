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
      'getCommentById',
      'getCommentByRef'
    ])
  }

  getCommentById() {
    this.setState({commentText: new_comment.value})
  }

  getCommentByRef() {
    this.setState({commentText: this.refs.new_comment_input.value})
  }

  render() {
    return (
      <div className="new_comment__form">
        <label htmlFor="new_comment">Add comment</label>

        <div>
          <input id="new_comment" ref="new_comment_input"/>
        </div>

        <div>
          <button onClick={this.getCommentById}>Add comment by ID</button>
          <button onClick={this.getCommentByRef}>Add comment by Ref</button>
        </div>

        <span>Captured comment value: {this.state.commentText}</span>
      </div>
    )
  }
}
