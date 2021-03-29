export default class UI {
  constructor() {
  }
  static $(selector) {
    return document.querySelector(selector);
  }
}