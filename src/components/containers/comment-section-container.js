import { Component, createRef } from 'react';
import * as api from '../../api/comments-api';
import * as config from './container-config';
import CommentSectionView from '../views/comment-section-view';
import CommentButtons from '../views/generated-list-buttons-view';
import CommentView from '../views/comment-view';
import GeneratedListContainer from './generated-list-container';
import { connect } from 'react-redux';

class CommentSectionContainer extends Component {
  constructor(props) {
    super(props);
    this.dataRef = createRef();
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleSubmitComment() {
    if (localStorage.getItem("id") == null) {
      alert("Please log in first.");
      return;
    }

    api.postComment(this.params.articleId, this.dataRef.current.value)
    .catch(error => {
      alert(`Posting failed, reason: ${erorr.message}`);
      return Promise.reject(); // Skin updating comments, since it wasn't posted
    })
    .then(() => api.getCommentsCount(this.props.articleId))
    .then(count => api.getComments(this.props.articleId, 0, config.COMMENT_MAX_ITEMS_PER_PAGE, count))
    .catch(error => {
      if (!error) {
        return;
      }
      alert(`There was an error updating comments section, try refreshing the page.`);
    });
  }

  handleLoadMore(commentId, type = 'fromId') {
    return api.getCommentsCount(this.props.articleId)
    .then(count => api.getComments(this.props.articleId, commentId, config.COMMENT_MAX_ITEMS_PER_PAGE, count, type));
  }

  componentDidMount() {
    api.getCommentsCount(this.props.articleId)
    .then(count => api.getComments(this.props.articleId, (count-config.COMMENT_MAX_ITEMS_PER_PAGE), config.COMMENT_MAX_ITEMS_PER_PAGE, count));
  }

  render() {
    return (
      <CommentSectionView onCommentSubmit={this.handleSubmitComment} 
        textDataRef={this.dataRef}>
        <GeneratedListContainer articleId={this.props.articleId}
          count={this.props.count}
          maxItemsPerPage={config.COMMENT_MAX_ITEMS_PER_PAGE}
          originData={this.props.comments}
          viewElement={CommentView}
          controlElement={CommentButtons} 
          loadMore={this.handleLoadMore} />
      </CommentSectionView>
    );
  }
}

function mapStateToProps(store) {
  return {
    count: store.commentsState.total,
    comments: store.commentsState.comments
  };
}

export default connect(mapStateToProps)(CommentSectionContainer);