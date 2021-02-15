import Element from './Element';
import Key from './Key';
import keys from '../configs/keys';
import cssClassNames from '../constants/cssClassNames';

const { NUMBER_KEYS, OPERATOR_KEYS } = keys;
const { KEYBOARD, KEYBOARD_NUMBERS, KEYBOARD_OPERATORS } = cssClassNames;

const generateKeys = (configsArr, wrapperClassName) => {
  const wrapper = Element.createDOMElement({ classNames: [wrapperClassName] });

  configsArr.forEach((obj) => {
    wrapper.insertAdjacentElement('afterbegin', new Key(obj).element);
  });

  return wrapper;
};

class Keyboard extends Element {
  constructor({ outerClassNames }) {
    super({
      classNames: [...outerClassNames, KEYBOARD],
    });

    const numberKeysWrapper = generateKeys(NUMBER_KEYS, KEYBOARD_NUMBERS);
    const operatorKeysWrapper = generateKeys(OPERATOR_KEYS, KEYBOARD_OPERATORS);

    numberKeysWrapper.addEventListener('click', (event) => {
      const { value } = event.target.dataset;

      if (value === undefined) {
        return;
      }

      console.log(value);
    });

    this.element.append(numberKeysWrapper, operatorKeysWrapper);
  }
}

export default Keyboard;
