import style from './search.module.css';
import { Link } from 'react-router-dom';

export default function SearchView(props) {
  return (
    <>
      {'first_name' in props.item && <div class="m-4">
        <Link to="/profile/5"><h4 class="display-5">{`${props.item.first_name} ${props.item.last_name}`}</h4></Link>
        <p class="lead">User profile</p>
      </div>}
      {'title' in props.item && <div class="m-4">
        <Link to="/article/5"><h4 class={`${style.title} display-5`}>{props.item.title.length > 10 ? (props.item.title.slice(0, 10) + "...") : props.item.title}</h4></Link>
        <p class={`${style.text} lead`}>{props.item.text.length > 90 ? (props.item.text.slice(0, 90) + "...") : props.item.text}</p>
        <p class="lead">An article</p>
      </div>}
    </>
  );
};