import Element from './components/Element';
import Calculator from './components/Calculator';
import cssClassNames from './constants/cssClassNames';

const { APP, APP_CALCULATOR } = cssClassNames;

class App {
  constructor() {
    this.app = Element.getDOMElement({ classNames: [APP] });
    this.calculator = Calculator.getDOMElement({
      outerClassNames: [APP_CALCULATOR],
    });

    this.app.append(this.calculator);
  }

  static init(parent) {
    parent.insertAdjacentElement('afterbegin', new App().app);
  }
}

export default App;
