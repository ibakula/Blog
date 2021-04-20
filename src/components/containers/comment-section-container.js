import { Component, createRef } from 'react';
import * as api from '../../api/comments-api';
import { insertComment } from '../../actions/comments-actions';
import CommentSectionView from '../views/comment-section-view';
import { connect } from 'react-redux';
import store from '../../store';

class CommentSectionContainer extends Component {
  constructor(props) {
    super(props);
    this.dataRef = createRef();
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment() {
    if (localStorage.getItem("id") == null) {
      alert("Please log in first.");
      return;
    }

    api.postComment(this.params.articleId, this.dataRef.current.value)
    .then(() => {
      api.getComments(this.props.articleId)
      .catch(() => {
        const comment = {
          post_id: this.props.articleId,
          text: this.dataRef.current.value,
          author: localStorage.getItem("first_name") + " " + localStorage.getItem("last_name"),
          date: Date.now()
        };
        store.dispatch(insertComment(comment));
      });
    })
    .catch(error => {
      alert(`Posting failed, reason: ${erorr.message}`);
      throw error;
    });
  }

  componentDidMount() {
    api.getComments(this.props.articleId);
  }

  render() {
    return (
      <CommentSectionView onCommentSubmit={this.handleSubmitComment} textDataRef={this.dataRef} comments={this.props.comments} />
    );
  }
}

function mapStateToProps(store) {
  return {
    comments: store.commentsState.comments
  };
}

export default connect(mapStateToProps)(CommentSectionContainer);