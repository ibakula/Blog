import { Form, Button } from 'react-bootstrap';
import style from './comment-section.module.css'

export default function CommentSectionView(props) {
  return(
    <div class={`${style.bgSettings} p-sm-5 p-3 mt-sm-5 mt-3`}>
      <h3>Comments section</h3>
      <div class="pl-sm-2">
        <Form>
          <Form.Group controlId="commentField">
            <Form.Label class="lead">Comment:</Form.Label>
            <Form.Control className={`${style.textFieldSettings}`} as="textarea" rows="3" placeholder="Enter your comment here" required />
          </Form.Group>
          <Button variant="primary">Comment</Button>
        </Form>
        <div class="mt-3">
          <div class="mt-2">
            <p>Some comment written by the user.</p>
            <p className="mt-1">Written by User on DD.MM.YYYY HH:MM</p>
          </div>
        </div>
      </div>
    </div>
  );
};