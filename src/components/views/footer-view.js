import { Component } from 'react';
import style from '../linksinheritdeco.module.css';

export default class FooterView extends Component {
  render() {
    return (
      <footer class="bg-light display-block text-center p-3 mt-5"><a href="#navbar" class={style.removeDecorations}>Go to the top!</a></footer>
    );
  }
};