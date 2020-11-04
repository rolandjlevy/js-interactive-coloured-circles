export default class Colours {
  constructor() {
    this.array = [];
    this.hexRange = ['00', '33', '66', '99', 'cc', 'ff'];
    this.init();
  }
  init() {
    this.hexRange.forEach(r => {
      this.hexRange.forEach(g => {
        this.hexRange.forEach(b => this.array.push(r + g + b));
      });
    });
  }
}