import {
  ADD_VALUE_TO_INPUT,
  DELETE_VALUE_FROM_INPUT,
  CLEAR_INPUT,
} from './actionTypes';

const initialState = {
  input: '',
  history: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE_TO_INPUT: {
      const { input } = state;

      return {
        ...state,
        input: `${input}${payload}`,
      };
    }
    case DELETE_VALUE_FROM_INPUT: {
      const input = { state };
      return {
        ...state,
        input: input.slice(0, -1),
      };
    }
    case CLEAR_INPUT: {
      return {
        ...state,
        history: '',
        input: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
