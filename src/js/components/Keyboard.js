import Element from './Element';
import Key from './Key';
import keys from '../configs/keys';
import { addValueToInputAC } from '../state/actionCreators';
import cssClassNames from '../constants/cssClassNames';

const { NUMBER_KEYS, OPERATOR_KEYS } = keys;
const { KEYBOARD, KEYBOARD_NUMBERS, KEYBOARD_OPERATORS } = cssClassNames;

const generateKeys = (configsArr, wrapperClassName) => {
  const wrapper = Element.createDOMElement({ classNames: [wrapperClassName] });

  configsArr.forEach((obj) => {
    wrapper.appendChild(new Key(obj).element);
  });

  return wrapper;
};

class Keyboard extends Element {
  constructor({ outerClassNames, store }) {
    super({
      classNames: [...outerClassNames, KEYBOARD],
    });

    const numberKeysWrapper = generateKeys(NUMBER_KEYS, KEYBOARD_NUMBERS);
    const operatorKeysWrapper = generateKeys(OPERATOR_KEYS, KEYBOARD_OPERATORS);

    numberKeysWrapper.addEventListener('click', ({ target }) => {
      const { value } = target.dataset;

      if (value) {
        store.dispatch(addValueToInputAC(value));
      }
    });

    operatorKeysWrapper.addEventListener('click', ({ target }) => {
      const { value } = target.dataset;

      if (value && value !== '=') {
        store.dispatch(addValueToInputAC(value));
      } else {
        console.log('equals pressed!');
      }
    });

    this.element.append(numberKeysWrapper, operatorKeysWrapper);
  }
}

export default Keyboard;
