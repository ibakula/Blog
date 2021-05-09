import style from './generated-list-buttons.module.css'

export default function SearchButtonsView(props) {
  return (
    <div className="m-4">
      {'showPreviousList' in props.item && <a className={`${style.cursor} text-primary`} onClick={props.item.showPreviousList}>Show more results</a>}
      {('showBoth' in props.item && props.item.showBoth) && <span className="ml-2 mr-2">|</span>}
      {'showNextList' in props.item && <a className={`${style.cursor} text-primary`} onClick={props.item.showNextList}>Go back</a>}
    </div>
  );
};