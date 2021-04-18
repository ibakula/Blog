import { Component } from 'react';
import * as api from '../../api/comments-api';
import CommentSectionView from '../views/comment-section-view';
import { connect } from 'react-redux';

class CommentSectionContainer extends Component {
  componentDidMount() {
    api.getComments(this.props.articleId);
  }

  render() {
    return (
      <CommentSectionView comments={this.props.comments} />
    );
  }
}

function mapStateToProps(store) {
  return {
    comments: store.commentsState.comments
  };
}

export default connect(mapStateToProps)(CommentSectionContainer);