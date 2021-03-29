import Ball from '/src/Ball.js';
import Colours from '/src/Colours.js';
import DarkMode from '/src/DarkMode.js';
import UI from './src/UI.js';

new DarkMode();

const colours = new Colours();

const ids = [...Array(colours.array.length).keys()];

ids.forEach((id, index) => {
  const ball = new Ball();
  ball.init({id, colours:colours.array, index});
  ball.addEventHook();
});

UI.$('#year').textContent = new Date().getFullYear();