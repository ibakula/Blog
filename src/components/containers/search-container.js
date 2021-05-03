import { Component } from 'react';
import SearchView from '../views/search-view';
import * as navigationApi from '../../api/navigation-api';
import store from '../../store';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { init: true };
  }

  componentDidMount() {
    store.dispatch({type:"DISPLAY_RESULTS", results: ["hi", "Works!"]});
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
      this.setState({ init: true });
      store.dispatch({type:"DISPLAY_RESULTS", results: ["one", "two"]});
    }
  }

  render() {
    return (
      <SearchView results={this.props.results}
        init={this.state.init} />
    );
  };
};

function mapStateToProps(store) {
  return {
    results: store.searchState.results
  };
}

export default connect(mapStateToProps)(SearchContainer);