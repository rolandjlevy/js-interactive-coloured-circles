var hex = ['00', '33', '66', '99', 'cc', 'ff'];
hex.forEach(r => {
  hex.forEach(g => {
    hex.forEach(b => colours.push(r + g + b));
  });
});

ids.forEach((id, index) => {
  const div = document.createElement('div');
  div.id = `b${id}`;
  div.classList.add('ball')
  div.style.setProperty('--scale', 0.1);
  div.style.setProperty('--opacity', 0.1);
  div.style.backgroundColor = `#${colours[index]}`;
  $('.wrapper').appendChild(div);
});

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