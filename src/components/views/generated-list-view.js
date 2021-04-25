export default function GeneratedListView(props) {
  let mutedData = [];

  for (let i = 0; i < props.originData.length; ++i) {
    const data = Object.assign({}, props.originData[i]);

    if ('date' in data) {
      const date = new Date(parseInt(data.date));
      data.date = date.toUTCString();
    }

    mutedData.push(data);
    // Stop if: five have been shown or this is the last page
    if (i == (props.originData.length-1)) {
      const showPrev = (props.loadedCount-props.maxItemsPerPage) > 0;
      const showNext = props.loadedCount < props.count;
      const showBoth = showPrev && showNext;
      const actions = { showBoth };
      if (showPrev) {
        actions.showPreviousList = props.showPreviousList;
      }
      if (showNext) {
        actions.showNextList = props.showNextList;
      }
      mutedData.push(actions);
      break;
    }
  }

  const Element = props.viewElement;
  const ControlElement = props.controlElement;

  return (
    <>
    {
      mutedData.map((item, index) => {
        return ('text' in item ? <Element key={item.id} item={item} /> : <ControlElement item={item} />);
      })
    }
    </>
  );
};