import Element from './Element';
import cssClassNames from '../constants/cssClassNames';

const { SCREEN, SCREEN_PREVIOUS, SCREEN_CURRENT } = cssClassNames;

class Screen extends Element {
  constructor() {
    super({ classNames: [SCREEN] });

    this.previousScreen = Element.getDOMElement({ classNames: [SCREEN_PREVIOUS] });
    this.currentScreen = Element.getDOMElement({ classNames: [SCREEN_CURRENT] });

    this.element.append(this.previousScreen, this.currentScreen);
  }
}

export default Screen;
