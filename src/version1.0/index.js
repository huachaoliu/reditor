import Reditor from './core';

window['Reditor'] = Reditor;
// window.localStorage.setItem();

if (module.hot) {
  module.hot.dispose(function () {
    // 模块即将被替换时
    // console.log('before uodating');
  });

  module.hot.accept(function () {
    // 模块或其依赖项之一刚刚更新时
    // console.log('updated');
  });
}