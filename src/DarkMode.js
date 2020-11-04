export default class DarkMode {
  constructor() {
    this.init();
  }
  init() {
    this.$('.mode-toggle').addEventListener('click', (e) => {
      this.$('body').classList.toggle('dark-mode');
      const darkMode = this.$('body').classList.value.includes('dark-mode');
      this.$('.mode-toggle').textContent = darkMode ? '🌖' : '🌒';
    });
  }
  $(selector) {
    return document.querySelector(selector);
  }
}