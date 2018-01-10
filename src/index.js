import Reditor from './core';
import './index.css';
// import "babel-polyfill";
window['Reditor'] = Reditor;

if (module.hot) {
  module.hot.accept();
}