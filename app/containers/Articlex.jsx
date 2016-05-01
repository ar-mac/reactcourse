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
      idCommentText: '',
      refCommentText: ''
    };

    _.bindAll(this, [
      'getCommentById',
      'getCommentByRef'
    ])
  }

  getCommentById() {
    this.setState({idCommentText: new_comment.value})
  }

  getCommentByRef() {
    this.setState({refCommentText: this.refs.new_comment_input.value})
  }

  render() {
    const someMarkup = {__html: '<span>Comments</span>'}
    return (
      <div
        className="article"
        key={`article_${this.props.article.id}`}
      >
        <div className="article__comments">
          <p dangerouslysetinnerhtml={someMarkup}/>
          <label htmlFor="new_comment">Add comment </label>

          <input id="new_comment" ref="new_comment_input"/>

          <div className="article__buttons">
            <button onClick={this.getCommentById}>Get comment by ID</button>
            <button onClick={this.getCommentByRef}>Get comment by Ref</button>
          </div>
          <div>
            <div>Captured value by ID: {this.state.idCommentText}</div>
            <div>Captured value by ref: {this.state.refCommentText}</div>
          </div>
        </div>
      </div>
    )
  }
}
