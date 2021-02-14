import Element from './Element';
import cssClassNames from '../constants/cssClassNames';

const { KEYBOARD } = cssClassNames;

class Keyboard extends Element {
  constructor() {
    super({
      classNames: [KEYBOARD],
    });
  }
}

export default Keyboard;
