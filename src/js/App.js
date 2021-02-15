import Element from './components/Element';
import Calculator from './components/Calculator';
import cssClassNames from './constants/cssClassNames';

const { APP, APP_CALCULATOR } = cssClassNames;

class App {
  constructor() {
    this.app = Element.createDOMElement({ classNames: [APP] });
    this.calculator = Calculator.createDOMElement({
      outerClassNames: [APP_CALCULATOR],
    });

    this.app.append(this.calculator);
  }

  static init(parent) {
    parent.insertAdjacentElement('afterbegin', new App().app);
  }
}

export default App;
