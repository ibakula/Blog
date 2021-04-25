import style from './comment-buttons.module.css'

export default function CommentButtonsView(props) {
  return (
    <>
      {'showPreviousList' in props.item && <a className={`${style.cursor} text-primary`} onClick={props.item.showPreviousList}>Show newer</a>}
      {('showBoth' in props.item && props.item.showBoth) && <span className="ml-2 mr-2">|</span>}
      {'showNextList' in props.item && <a className={`${style.cursor} text-primary`} onClick={props.item.showNextList}>Show older</a>}
    </>
  );
};