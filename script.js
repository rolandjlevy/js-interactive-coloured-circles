import Ball from '/src/Ball.js';

function $(selector) {
  return document.querySelector(selector);
}

const colours = [];
var hex = ['00', '33', '66', '99', 'cc', 'ff'];
hex.forEach(r => {
  hex.forEach(g => {
    hex.forEach(b => colours.push(r + g + b));
  });
});

const ids = [...Array(colours.length).keys()];

ids.forEach((id, index) => {
  const div = document.createElement('div');
  div.id = `b${id}`;
  div.classList.add('ball')
  div.style.setProperty('--scale', 0.1);
  div.style.setProperty('--opacity', 0.1);
  div.style.backgroundColor = `#${colours[index]}`;
  $('.wrapper').appendChild(div);
});

const ball1 = new Ball();
ball1.init({id:300, colours, index:10});
ball1.addEventHook();
const ball2 = new Ball();
ball2.init({id:301, colours, index:100});
ball2.addEventHook();

document.addEventListener('mousemove', (e) => {
  ids.forEach(id => morph(e, `#b${id}`));
});

function morph(e, selector) {
  const x = getOrigin(selector).x;
  const y = getOrigin(selector).y;
  let n = getNearness(e, x, y);
  const result = (140 - n)/100 <= 0.1 ? 0.1 : (140 - n)/100;
  $(selector).style.setProperty('--scale', result);
  $(selector).style.setProperty('--opacity', result);
}

function getOrigin(selector) {
  const { top, right, bottom, left } = $(selector).getBoundingClientRect();
  const x = (right - left) / 2 + left;
  const y = (bottom - top) / 2 + top;
  return { x, y };
}

function getNearness(e, ballX, ballY) {
  const x = Math.abs(ballX - e.clientX);
  const y = Math.abs(ballY - e.clientY);
  return Math.sqrt(x * x + y * y);
}