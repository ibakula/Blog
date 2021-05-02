import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function WelcomeStripeView(props) {
  return (
    <div className="bg-dark pt-3 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 bg-light">
      <p className="mb-0 lead text-white"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Avatar" width="60em" height="60em" className="mr-3" />Hi, <Link className="text-warning" to="/profile">{localStorage.getItem("first_name") + " " + localStorage.getItem("last_name")}</Link>, you are viewing {props.pageName} page!</p>
    </div>
  );
};

WelcomeStripeView.propTypes = {
  pageName: PropTypes.string
};