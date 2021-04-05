import React from 'react';
import PropTypes from 'prop-types'
import NavigationBarView from '../views/navigation-view';
import * as navigationApi from '../../api/navigation-api';
import { Form, FormControl, Button } from 'react-bootstrap';

class NavigationContainer extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchFieldRef = React.createRef();
  }

  handleSearch(e) {
    /* ToDo: Script search function */
    const searchText = this.searchFieldRef.current.value;
    console.log(searchText);
    navigationApi.searchForTerm(searchText);
  }

  render() {
    return (
      <NavigationBarView>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={this.searchFieldRef} onKeyPress={(e) => { if (e.key == 'Enter') { e.preventDefault(); } }} />
          <Button variant="outline-success" onClick={this.handleSearch} className="mt-2 mt-sm-0">Search</Button>
        </Form>
      </NavigationBarView>
    );
  }
};

export default NavigationContainer;