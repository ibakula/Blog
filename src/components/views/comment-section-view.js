import { Form, Button } from 'react-bootstrap';
import style from './comment-section.module.css'
import PropTypes from 'prop-types';

export default function CommentSectionView(props) {
  return(
    <div className={`${style.bgSettings} p-sm-5 p-3 mt-sm-5 mt-3`}>
      <h3>Comments section</h3>
      <div className="pl-sm-2">
        <Form>
          <Form.Group controlId="commentField">
            <Form.Label className="lead">Comment:</Form.Label>
            <Form.Control className={`${style.textFieldSettings}`} as="textarea" rows="3" placeholder="Enter your comment here" required />
          </Form.Group>
          <Button variant="primary">Comment</Button>
        </Form>
          {props.comments != null && props.comments.map(comment => {
            if (comment.post_id == props.articleId) {
              const date = new Date(comment.date);
              return (
                <div className="mt-3">
                  <div className="mt-2">
                    <p>{comment.text}.</p>
                    <p className="mt-1">Written by {comment.author} on {date.toUTCString()}</p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

CommentSectionView.propTypes = {
  articleId: PropTypes.number,
  comments: PropTypes.array
};