import { Form, Button } from 'react-bootstrap';
import style from './comment-section.module.css'
import PropTypes from 'prop-types';

export default function CommentSectionView(props) {
  return(
    <div className={`${style.bgSettings} p-sm-5 p-3 mt-sm-5 mt-3`}>
      <h3>Comments section</h3>
      <div className="pl-sm-2">
        <Form onSubmit={props.onCommentSubmit}>
          <Form.Group controlId="commentField">
            <Form.Label className="lead">Comment:</Form.Label>
            <Form.Control ref={props.textDataRef} className={`${style.textFieldSettings}`} as="textarea" rows="3" placeholder="Enter your comment here" required />
          </Form.Group>
          <Button type="submit" variant="primary">Comment</Button>
        </Form>
        {props.children}
      </div>
    </div>
  );
};

CommentSectionView.propTypes = {
  onCommentSubmit: PropTypes.func,
  textDataRef: PropTypes.object
};