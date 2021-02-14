import cssClassNames from '../constants/cssClassNames';

const { KEY_BLACK, KEY_WIDE } = cssClassNames;

export default {
  '+': {
    value: '+',
    operation: (a, b) => a + b,
  },
  '-': {
    value: '-',
    operation: (a, b) => a - b,
  },
  '×': {
    value: '×',
    operation: (a, b) => a * b,
  },
  '÷': {
    value: '÷',
    operation: (a, b) => a / b,
  },
  '=': {
    value: '=',
    presentation: [KEY_BLACK, KEY_WIDE],
  },
};
