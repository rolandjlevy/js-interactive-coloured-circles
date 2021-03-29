import UI from './UI.js';

export default class DarkMode {
  constructor() {
    this.init();
  }
  init() {
    UI.$('.mode-toggle').addEventListener('click', (e) => {
      UI.$('body').classList.toggle('dark-mode');
      UI.$('.mode-toggle').textContent = this.darkMode() ? '🌖' : '🌒';
    });
  }
  darkMode() {
    return UI.$('body').classList.value.includes('dark-mode');
  }
}