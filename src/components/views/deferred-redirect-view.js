import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function DeferredRedirectView(props) {
  const [ redirect, setRedirect ] = useState(false);
  setTimeout(() => { setRedirect(true) }, props.delay);
  return (
    redirect && <Redirect to={props.to} />
  );
};

DeferredRedirectView.propTypes = {
  to: PropTypes.string,
  delay: PropTypes.number
};

DeferredRedirectView.defaultProps = {
  delay: 5000
};