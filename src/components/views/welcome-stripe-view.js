import { Link } from 'react-router-dom';

export default function WelcomeStripeView(props) {
  return (
    <div className="bg-dark pt-3 pb-3 pl-sm-5 pl-3 pr-sm-5 pr-3 bg-light">
      <p className="mb-0 lead text-white"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Avatar" width="60em" height="60em" class="mr-3" />Hi, <Link className="text-warning" to="/profile">User</Link>, welcome to the page name!</p>
    </div>
  );
};