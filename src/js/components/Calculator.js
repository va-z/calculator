import Element from './Element';
import Screen from './Screen';
import Keyboard from './Keyboard';
import cssClassNames from '../constants/cssClassNames';

const { CALCULATOR, CALCULATOR_SCREEN, CALCULATOR_KEYBOARD } = cssClassNames;

class Calculator extends Element {
  constructor({ outerClassNames }) {
    super({
      classNames: [...outerClassNames, CALCULATOR],
    });

    this.screen = new Screen({ outerClassNames: [CALCULATOR_SCREEN] });
    this.keyboard = new Keyboard({
      outerClassNames: [CALCULATOR_KEYBOARD],
      screen: this.screen,
    });

    this.element.append(this.screen.element, this.keyboard.element);
  }
}

export default Calculator;
