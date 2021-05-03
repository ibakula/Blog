import { Component, createRef } from 'react';
import NavigationBarView from '../views/navigation-view';
import * as api from '../../api/session-api';

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.searchFieldRef = createRef();
    this.state = { searchRedirection: false };
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ searchRedirection: true });
  }

  handleLogout(e) {
    e.preventDefault();
    api.logout().then(() => api.updateNavigationBarOnLogout());
  }

  componentDidUpdate() {
    if (this.state.searchRedirection) {
      this.setState({ searchRedirection: false });
    }
  }

  render() {
    return (
      <NavigationBarView onLogout={this.handleLogout} 
        onSearch={this.handleSearch} 
        searchFieldRef={this.searchFieldRef}
        searchRedirection={this.state.searchRedirection} />
    );
  }
};

export default NavigationContainer;