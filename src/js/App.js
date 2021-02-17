import Element from './components/Element';
import Calculator from './components/Calculator';
import createStore from './state/store';
import cssClassNames from './constants/cssClassNames';

const { APP, APP_CALCULATOR } = cssClassNames;

const store = createStore();

class App {
  constructor() {
    this.app = Element.createDOMElement({ classNames: [APP] });
    this.calculator = Calculator.createDOMElement({
      outerClassNames: [APP_CALCULATOR],
      store,
    });

    this.app.append(this.calculator);
  }

  static init(parent) {
    parent.insertAdjacentElement('afterbegin', new App().app);
  }
}

export default App;
