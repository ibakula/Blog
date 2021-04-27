import { Component } from 'react';
import RegistrationView from '../views/registration-view';
import PopularSectionContainer from './popular-articles-container';

class RegistrationContainer extends Component {
  render() {
    return (
      <RegistrationView>
        <PopularSectionContainer />
      </RegistrationView>
    );
  }
};

export default RegistrationContainer;