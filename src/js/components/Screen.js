import Element from './Element';
import cssClassNames from '../constants/cssClassNames';

const { SCREEN, SCREEN_PREVIOUS, SCREEN_CURRENT } = cssClassNames;

class Screen extends Element {
  constructor({ outerClassNames, store }) {
    super({ classNames: [...outerClassNames, SCREEN] });

    this.previousScreen = Element.createDOMElement({
      classNames: [SCREEN_PREVIOUS],
    });
    this.currentScreen = Element.createDOMElement({
      classNames: [SCREEN_CURRENT],
    });

    store.subscribe(() => {
      const { input, history } = store.getState();
      this.previousScreen.textContent = history;
      this.currentScreen.textContent = input;
    });

    this.element.append(this.previousScreen, this.currentScreen);
  }

  updateScreen(value) {
    this.currentScreen.textContent += value;
  }
}

export default Screen;
