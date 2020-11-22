import Utils from './Utils.js';

export default class Balls extends Utils {
  constructor() {
    super();
  }
  init({id, colours, index}) {
    this.id = id;
    const div = document.createElement('div');
    this.minSize = 0.15;
    div.id = `b${this.id}`;
    div.classList.add('ball')
    div.style.setProperty('--scale', this.minSize);
    div.style.setProperty('--opacity', this.minSize);
    div.style.backgroundColor = `#${colours[index]}`;
    this.$('.wrapper').appendChild(div);
  }
  addEventHook() {
    document.addEventListener('mousemove', (e) => {
      e.preventDefault();
      this.morph(e, `#b${this.id}`);
    });
  }
  morph(e, selector) {
    const x = this.getOrigin(selector).x;
    const y = this.getOrigin(selector).y;
    let n = this.getNearness(e, x, y);
    const result = (140 - n)/100 <= this.minSize ? this.minSize : (140 - n)/100;
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
  addEventHookMouseTouch() {
    ['mousemove', 'touchmove'].forEach(event => {
      document.addEventListener(event, (e) => {
        e.preventDefault();
        this.morph(e, `#b${this.id}`);
      });
   });
  }
  getNearnessTouchmove(evt, ballX, ballY) {
    const e = evt.touches ? evt.touches[0] : evt;
    const xPos = evt.touches ? e.offsetX - e.target.offsetLeft : e.clientX;
    const yPos = evt.touches ? e.offsetY - e.target.offsetTop : e.clientY;
    const x = Math.abs(ballX - xPos);
    const y = Math.abs(ballY - yPos);
    return Math.sqrt(x * x + y * y);
  }
}