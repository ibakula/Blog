import { Component } from 'react';
import GeneratedListView from '../views/generated-list-view';

export default class GeneratedListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loadedItemsCount: 0 };
    this.handleShowNextList = this.handleShowNextList.bind(this);
    this.handleShowPreviousList = this.handleShowPreviousList.bind(this);
  }

  handleShowNextList() {
    if (this.state.loadedItemsCount == this.props.count) {
      return;
    }
    let loadItems = this.state.loadedItemsCount + this.props.maxItemsPerPage;
    loadItems > this.props.count ? loadItems = this.props.count : loadItems;
    if (loadItems <= this.props.count) {
      let id = loadItems == 0 ? 0 : this.props.originData[this.props.originData.length-1].id;
      this.props.loadMore(id, 'toId')
      .then(() => {
        this.setState({ loadedItemsCount: loadItems }); 
      })
      .catch(() => {
        this.setState({ loadedItemsCount: 0 }); 
      });
    }
  }

  handleShowPreviousList() {
    if (this.state.loadedItemsCount == 0) {
      return;
    }
    let loadItems = this.state.loadedItemsCount - this.props.originData.length;
    loadItems < 0 ? loadItems = 0 : loadItems;

    if (loadItems <= this.props.count) {
      let id = loadItems == 0 ? 0 : this.props.originData[0].id;
      this.props.loadMore(id, 'fromId')
      .then(() => {
        this.setState({ loadedItemsCount: loadItems }); 
      })
      .catch(() => {
        this.setState({ loadedItemsCount: 0 }); 
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.originData.length == 0 || ('articleId' in this.props && this.props.articleId != prevProps.articleId)) {
      return;
    }

    if (prevProps.originData.length != this.props.originData.length && this.state.loadedItemsCount == 0) {
      this.setState({ loadedItemsCount: this.props.originData.length });
    }
  }

  componentWillUnmount() {
    this.setState({ loadedItemsCount: 0 });
  }

  render() {
    return (
      <GeneratedListView startItem={this.state.listStartItem} 
        loadedCount={this.state.loadedItemsCount}
        showNextList={this.handleShowNextList}
        showPreviousList={this.handleShowPreviousList}
        loadedPage={this.state.loadedPage}
        {...this.props} />
    )
  }
};