import { Component } from 'react';
import RegistrationView from '../views/registration-view';
import PopularSectionView from '../views/popular-articles-view';

class RegistrationContainer extends Component {
  render() {
    return (
      <RegistrationView>
        <PopularSectionView />
      </RegistrationView>
    );
  }
};

export default RegistrationContainer;