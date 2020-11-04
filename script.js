const $ = selector => document.querySelector(selector);
const total = 64;
const ids = [...Array(total).keys()];

ids.forEach(id => {
  const div = document.createElement('div');
  div.id = `b${id}`;
  div.classList.add('ball')
  div.style.setProperty('--scale', 0.15);
  div.style.setProperty('--opacity', 0.15);
  $('.wrapper').appendChild(div);
});

document.addEventListener('mousemove', (e) => {
  ids.forEach(id => morph(e, `#b${id}`));
});

function morph(e, selector) {
  const x = getPos(selector).x;
  const y = getPos(selector).y;
  let n = getNearness(e, x, y);
  const result = (100 - n)/100 <= 0.15 ? 0.15 : (100 - n)/100;
  $(selector).style.setProperty('--scale', result);
  $(selector).style.setProperty('--opacity', result);
}

function getPos(selector) {
  const { top, right, bottom, left } = $(selector).getBoundingClientRect();
  const x = (right - left) / 2 + left;
  const y = (bottom - top) / 2 + top;
  return { x, y };
}

function getNearness(e, ballX, ballY) {
  const x = e.clientX;
  const y = e.clientY;
  const diffX = Math.abs(ballX - x);
  const diffY = Math.abs(ballY - y);
  return Math.sqrt(diffX * diffX + diffY * diffY);
}