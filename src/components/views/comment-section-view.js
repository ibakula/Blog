import { Form, Button } from 'react-bootstrap';
import style from './comment-section.module.css'
import PropTypes from 'prop-types';

export default function CommentSectionView(props) {
  let elements = [];

  for (let i = props.startFromComment; i < props.comments.length; ++i) {
    const date = new Date(parseInt(props.comments[i].date));
    elements.push(<div key={props.comments[i].id} className="mt-3">
        <div className="mt-2">
          <p>{props.comments[i].text}.</p>
          <p className="mt-1">Written by {props.comments[i].author} on {date.toUTCString()}</p>
        </div>
      </div>);
    // Stop if: five have been shown or this is the last page
    if (i != 0 && (((i+1) % 5) == 0 || i == (props.comments.length-1))) {
      const showPrev = ((i+1)-5) > 0;
      const showNext = i < (props.comments.length-1);
      const showBoth = showPrev && showNext;
      elements.push(<div className="mt-3">
        {showPrev && <a class="text-primary" onClick={props.showPreviousComments.bind(null, i)}>Show newer</a>}
        {showBoth && <span class="ml-2 mr-2">|</span>}
        {showNext && <a class="text-primary" onClick={props.showNextComments.bind(null, i)}>Show older</a>}
        </div>);
      break;
    }
  }

  return(
    <div className={`${style.bgSettings} p-sm-5 p-3 mt-sm-5 mt-3`}>
      <h3>Comments section</h3>
      <div className="pl-sm-2">
        <Form>
          <Form.Group controlId="commentField">
            <Form.Label className="lead">Comment:</Form.Label>
            <Form.Control ref={props.textDataRef} className={`${style.textFieldSettings}`} as="textarea" rows="3" placeholder="Enter your comment here" required />
          </Form.Group>
          <Button onClick={props.onCommentSubmit} variant="primary">Comment</Button>
        </Form>
        {elements}
      </div>
    </div>
  );
};

CommentSectionView.propTypes = {
  articleId: PropTypes.number,
  comments: PropTypes.array
};