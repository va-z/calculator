import Element from './Element';
import Key from './Key';
import numberKeys from '../configs/numberKeys';
import operatorKeys from '../configs/operatorKeys';
import cssClassNames from '../constants/cssClassNames';

const { KEYBOARD, KEYBOARD_NUMBERS, KEYBOARD__OPERATORS } = cssClassNames;

class Keyboard extends Element {
  constructor({ outerClassNames }) {
    super({
      classNames: [...outerClassNames, KEYBOARD],
    });

    const numberKeysWrapper = Element.getDOMElement({
      classNames: [KEYBOARD_NUMBERS],
    });

    const operatorKeysWrapper = Element.getDOMElement({
      classNames: [KEYBOARD__OPERATORS],
    });

    numberKeys.forEach((obj) => {
      numberKeysWrapper.insertAdjacentElement(
        'afterbegin',
        new Key(obj).element
      );
    });

    Object.values(operatorKeys).forEach((obj) => {
      operatorKeysWrapper.insertAdjacentElement(
        'afterbegin',
        new Key(obj).element
      );
    });

    this.element.append(numberKeysWrapper, operatorKeysWrapper);
  }
}

export default Keyboard;
