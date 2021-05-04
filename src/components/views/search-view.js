import style from './search.module.css';
import { Link } from 'react-router-dom';

export default function SearchView(props) {
  return (
    <>
      {props.results.length == 0 && <div class="m-4">Sorry, no matches have been found for your inquiry.</div>}
      <div class="m-4">
        <Link to="/profile/5"><h4 class="display-5">Test Test</h4></Link>
        <p class="lead">User profile</p>
      </div>
      <div class="m-4">
        <Link to="/article/5"><h4 class={`${style.title} display-5`}>Some text related to tech...</h4></Link>
        <p class={`${style.text} lead`}>Some really long text and all just to test out the length and everything all together which would contribute to the good layout of the site.</p>
        <p class="lead">An article</p>
      </div>
    </>
  );
};