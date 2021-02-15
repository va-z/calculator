import cssClassNames from '../constants/cssClassNames';

const {
  KEYBOARD_NUMBERS_ZERO,
  KEYBOARD_OPERATORS_EQUALS,
  KEY_GREEN,
} = cssClassNames;

export default {
  NUMBER_KEYS: [
    {
      value: '.',
    },
    {
      value: '0',
      presentation: [KEYBOARD_NUMBERS_ZERO],
    },
    {
      value: '3',
    },
    {
      value: '2',
    },
    {
      value: '1',
    },
    {
      value: '6',
    },
    {
      value: '5',
    },
    {
      value: '4',
    },
    {
      value: '9',
    },
    {
      value: '8',
    },
    {
      value: '7',
    },
  ],

  OPERATOR_KEYS: [
    {
      value: '=',
      presentation: [KEY_GREEN, KEYBOARD_OPERATORS_EQUALS],
    },
    {
      value: '+',
      operation: (a, b) => a + b,
    },
    {
      value: '-',
      operation: (a, b) => a - b,
    },
    {
      value: '×',
      operation: (a, b) => a * b,
    },
    {
      value: '÷',
      operation: (a, b) => a / b,
    },
    {
      value: '√',
      operation: (a) => Math.sqrt(a),
    },
    {
      value: '^',
      innerHTML: 'x<sup>y</sup>',
      operation: (a, b) => a ** b,
    },
  ],
};
