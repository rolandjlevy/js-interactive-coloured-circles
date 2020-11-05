import Utils from './Utils.js';

export default class DarkMode extends Utils {
  constructor() {
    super();
    this.init();
  }
  init() {
    this.$('.mode-toggle').addEventListener('click', (e) => {
      this.$('body').classList.toggle('dark-mode');
      this.$('.mode-toggle').textContent = this.darkMode() ? '🌖' : '🌒';
    });
  }
  darkMode() {
    return this.$('body').classList.value.includes('dark-mode');
  }
}