import Element from './Element';
import cssClassNames from '../constants/cssClassNames';

const { SCREEN, SCREEN_PREVIOUS, SCREEN_CURRENT } = cssClassNames;

class Screen extends Element {
  constructor({ outerClassNames }) {
    super({ classNames: [...outerClassNames, SCREEN] });

    this.previousScreen = Element.createDOMElement({
      classNames: [SCREEN_PREVIOUS],
    });
    this.currentScreen = Element.createDOMElement({
      classNames: [SCREEN_CURRENT],
    });

    this.element.append(this.previousScreen, this.currentScreen);
  }
}

export default Screen;
