export default class UI {
  constructor() {
  }
  static $(el) {
    return document.querySelector(el);
  }
  static $$(el) {
    return document.querySelectorAll(el);
  }
}