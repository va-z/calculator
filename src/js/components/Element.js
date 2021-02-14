import htmlTagNames from '../constants/htmlTagNames';

const { ELEMENT_TAG } = htmlTagNames;

class Element {
  /**
   * @param {Object} params - object with instance params
   * @param {String} params.tagName - HTML tag of desired Element
   * @param {Array<String>} params.classNames - array of Strings
   * @param {String} params.textContent - text inside Element
   * @param {Array<Array<String>>} params.attrs - an array of ["attr", "value"] pairs
   */
  constructor({
    tagName = ELEMENT_TAG,
    classNames = [],
    textContent = null,
    attrs = null,
  } = {}) {
    this.element = document.createElement(tagName);
    this.addClasses(classNames);
    this.addAttrs(attrs);

    if (textContent !== null) {
      this.element.textContent = textContent;
    }
  }

  addClasses(arr) {
    arr.forEach((str) => {
      this.element.classList.add(str);
    });
  }

  addAttrs(arr) {
    if (arr) {
      arr.forEach(([attr, val]) => {
        this.element.setAttribute(attr, val ?? '');
      });
    }
  }

  /**
   * @description Create and return new Element().element
   * @param {Object} params - Element params
   */
  static getDOMElement(params) {
    return new this(params).element;
  }
}

export default Element;
