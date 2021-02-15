import Element from './Element';
import htmlTagNames from '../constants/htmlTagNames';
import cssClassNames from '../constants/cssClassNames';

const { KEY_TAG } = htmlTagNames;
const { KEY } = cssClassNames;

class Key extends Element {
  constructor({ value = '', presentation = [], innerHTML } = {}) {
    super({
      tagName: KEY_TAG,
      classNames: [KEY, ...presentation],
      attrs: [['data-value', value]],
    });

    if (innerHTML !== undefined) {
      this.element.innerHTML = innerHTML;
    } else {
      this.element.textContent = value;
    }
  }
}

export default Key;
