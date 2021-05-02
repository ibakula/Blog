export default function CommentView(props) {
  return (
    <div className="mt-3">
        <div className="mt-2">
          <p>{props.item.text}</p>
          <p className="mt-1">Written by {props.item.author} on {props.item.date}</p>
        </div>
    </div>
  );
};