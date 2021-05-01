import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import RegistrationSectionContainer from '../containers/registration-container';
import PopularSectionContainer from '../containers/popular-articles-container';

export default class RegistrationLayout extends Component {
  render() {
    return (
      <>
        <Row noGutters={true} className="mt-sm-5 mt-3 pl-sm-5 pl-3">
          <Col md={8}>
            <RegistrationSectionContainer />
          </Col>
          <Col md={4}>
            <PopularSectionContainer />
          </Col>
        </Row>
      </>
    );
  }
};