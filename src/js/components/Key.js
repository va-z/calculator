import Element from './Element';
import htmlTagNames from "../constants/htmlTagNames";
import cssClassNames from "../constants/cssClassNames";

const { KEY_TAG } = htmlTagNames;
const { KEY } = cssClassNames; 

class Key extends Element {
  constructor() {
    super({
      tagName: KEY_TAG,
      classNames: [KEY],
    })
  }
}

export default Key;