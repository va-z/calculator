import View from './components/View/View';

class App {
  constructor(parent) {
    this.view = new View(parent);
  }

  static init(parent) {
    return new App(parent);
  }
}

export default App;
