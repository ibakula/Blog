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
    this.state = { listStartComment: 0 };
    this.handleShowNextComments = this.handleShowNextComments.bind(this);
    this.handleShowPreviousComments = this.handleShowPreviousComments.bind(this);
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

  handleShowNextComments(lastId) {
    this.setState({ listStartComment: (lastId+1) });
  }

  handleShowPreviousComments(lastId) {
    let newStateVal = (lastId - 9) < 0 ? 0 : lastId - 9;
    this.setState({ listStartComment: newStateVal });
  }

  componentDidMount() {
    api.getComments(this.props.articleId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.articleId != this.props.articleId) {
      this.setState({ listStartComment: 0 });
      api.getComments(this.props.articleId);
    }
  }

  componentWillUnmount() {
    this.setState({ listStartComment: 0 });
  }

  render() {
    return (
      <CommentSectionView startFromComment={this.state.listStartComment}
        showPreviousComments={this.handleShowPreviousComments}
        showNextComments={this.handleShowNextComments} 
        onCommentSubmit={this.handleSubmitComment} 
        textDataRef={this.dataRef} 
        comments={this.props.comments} />
    );
  }
}

function mapStateToProps(store) {
  return {
    comments: store.commentsState.comments
  };
}

export default connect(mapStateToProps)(CommentSectionContainer);