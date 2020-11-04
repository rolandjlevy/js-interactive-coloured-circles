export default class Ball {
  constructor() {
  }
  init({id, colours, index}) {
    this.id = id;
    const div = document.createElement('div');
    div.id = `b${this.id}`;
    div.classList.add('ball')
    div.style.setProperty('--scale', 0.15);
    div.style.setProperty('--opacity', 0.15);
    div.style.backgroundColor = `#${colours[index]}`;
    this.$('.wrapper').appendChild(div);
  }
  addEventHook() {
    document.addEventListener('mousemove', (e) => {
      this.morph(e, `#b${this.id}`);
    });
  }
  morph(e, selector) {
    const x = this.getOrigin(selector).x;
    const y = this.getOrigin(selector).y;
    let n = this.getNearness(e, x, y);
    const result = (140 - n)/100 <= 0.15 ? 0.15 : (140 - n)/100;
    this.$(selector).style.setProperty('--scale', result);
    this.$(selector).style.setProperty('--opacity', result);
  }
  getOrigin(selector) {
    const { top, right, bottom, left } = this.$(selector).getBoundingClientRect();
    const x = (right - left) / 2 + left;
    const y = (bottom - top) / 2 + top;
    return { x, y };
  }
  getNearness(e, ballX, ballY) {
    const x = Math.abs(ballX - e.clientX);
    const y = Math.abs(ballY - e.clientY);
    return Math.sqrt(x * x + y * y);
  }
  $(selector) {
    return document.querySelector(selector);
  }
}