import { Component } from 'react';
import style from '../linksinheritdeco.module.css';

export default class FooterView extends Component {
  render() {
    return (
      <footer className="bg-light display-block text-center p-3"><a href="#navbar" className={style.removeDecorations}>Go to the top!</a></footer>
    );
  }
};