import { Component } from 'react';
import SearchView from '../views/search-view';
import CommentButtons from '../views/generated-list-buttons-view';
import GeneratedListContainer from './generated-list-container';
import * as navigationApi from '../../api/navigation-api';
import store from '../../store';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { init: true };
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore(id, type = 'fromId') {

  }

  componentDidMount() {
    if (this.props.location.search.length <= 6) {
      this.setState({ init: false });
      return;
    }
    store.dispatch({type:"DISPLAY_RESULTS", results: [{first_name:"test", last_name:"test"}, {first_name:"intro", last_name:"duction"}, {title:"No title", text:"no text"}, {title:"untitled", text:"leep sadas"}]});
  }

  componentDidUpdate(prevProps) {
    if (this.state.init && 
      ((prevProps.results.length == 0 && 
      this.props.results.length == 0 && 
      this.props.results != prevProps.results) || 
      this.props.results != prevProps.results)) {
      this.setState({ init: false });
    }

    if (!this.state.init && 
      prevProps.location.search != this.props.location.search) {
      if (this.props.location.search.length > 6) {
        store.dispatch({type:"DISPLAY_RESULTS", results: [{first_name:"one", last_name:"two"}, {first_name:"three", last_name:"four"}, {first_name:"five", last_name:"six"}]});
      }
      else {
        store.dispatch({type:"DISPLAY_RESULTS", results: []});
      }
      this.setState({ init: true });
    }
  }

  render() {
    if (this.state.init) {
      return (
        <div class="m-4"><p class="lead">Loading data...</p></div>
      );
    }
    
    if (this.props.results.length == 0) {
      return (
        <div class="m-4"><p class="lead">Sorry, no matches have been found for your inquiry.</p></div>
      );
    }

    return (
      <>
        <GeneratedListContainer count={this.props.results.length}
          maxItemsPerPage= {10}
          originData={this.props.results}
          viewElement={SearchView}
          controlElement={CommentButtons} 
          loadMore={this.handleLoadMore} />
      </>
    );
  };
};

function mapStateToProps(store) {
  return {
    results: store.searchState.results
  };
}

export default connect(mapStateToProps)(SearchContainer);