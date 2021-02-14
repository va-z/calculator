import Element from './Element';
import htmlTagNames from '../constants/htmlTagNames';
import cssClassNames from '../constants/cssClassNames';

const { KEY_TAG } = htmlTagNames;
const { KEY } = cssClassNames;

class Key extends Element {
  constructor({ value = '', presentation = [] } = {}) {
    super({
      tagName: KEY_TAG,
      classNames: [KEY, ...presentation],
      textContent: value,
    });
  }
}

export default Key;
