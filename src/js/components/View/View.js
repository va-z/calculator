import Element from '../Element';
import htmlTagNames from '../../constants/htmlTagNames';
import cssClassNames from '../../constants/cssClassNames';

const { DIV } = htmlTagNames;
const { VIEW } = cssClassNames;

class View extends Element {
  constructor(parent) {
    super({
      tagName: DIV,
      classNames: [VIEW],
      textContent: 'test text',
    });

    parent.append(this.element);
  }
}

export default View;
