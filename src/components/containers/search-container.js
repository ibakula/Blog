import { Component } from 'react';
import * as config from './container-config';
import SearchView from '../views/search-view';
import SearchButtonsView from '../views/search-buttons-view';
import GeneratedListContainer from './generated-list-container';
import * as api from '../../api/navigation-api';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { init: true };
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.loadInitialData = this.loadInitialData.bind(this);
  }

  handleLoadMore(id, type = 'fromId') {
    let urlParams = new URLSearchParams(this.props.location.search);
    let termData = { term: urlParams.get("term") };
    let results = [];
    let total = 0;

    return api.getTermsResultsCount('posts', termData)
    .then(count => {
      if (count == 0) {
        return [];
      }
      total += count;
      return api.searchForTerm('posts', termData, type, id, config.SEARCH_RESULTS_MAX_ITEMS_PER_PAGE);
    })
    .then(data => {
      results = results.concat(data);
      api.updateSearchResultsState(results, total);
    })
    .catch(error => {
      if (this.props.results.length > 0) {
        api.updateSearchResultsState(null, 0, 2);
        return;
      }
      this.setState({ init: false });
    });
  }

  loadInitialData() {
    const params = new URLSearchParams(this.props.location.search);
    const postData = { term: params.get("term") };
    let results = [];
    let total = 0;

    api.getTermsResultsCount('posts', postData)
    .then(count => {
      if (count == 0) {
        return [];
      }
      total += count;
      return api.searchForTerm('posts', postData, 'none', 1, config.SEARCH_RESULTS_MAX_ITEMS_PER_PAGE); 
    })
    .then(data => {
      results = results.concat(data);
      api.updateSearchResultsState(results, total);
    })
    .catch(error => {
      if (this.props.results.length > 0) {
        api.updateSearchResultsState(null, 0, 2);
        return;
      }
      this.setState({ init: false });
    });
  }

  componentDidMount() {
    if (this.props.location.search.length <= 6) {
      this.setState({ init: false });
      return;
    }

    this.loadInitialData();
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
        this.loadInitialData();
      }
      else {
        api.updateSearchResultsState(null, 0, 2);
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
    
    // todo: add another check, hint at count property of a child 
    if (this.props.results.length == 0) {
      return (
        <div class="m-4"><p class="lead">Sorry, no matches have been found for your inquiry.</p></div>
      );
    }

    return (
      <>
        <GeneratedListContainer count={this.props.total}
          maxItemsPerPage={config.SEARCH_RESULTS_MAX_ITEMS_PER_PAGE}
          originData={this.props.results}
          viewElement={SearchView}
          controlElement={SearchButtonsView} 
          loadMore={this.handleLoadMore} />
      </>
    );
  };
};

function mapStateToProps(store) {
  return {
    total: store.searchState.total,
    results: store.searchState.results
  };
}

export default connect(mapStateToProps)(SearchContainer);