import {
  ADD_VALUE_TO_INPUT,
  DELETE_VALUE_FROM_INPUT,
  CLEAR_INPUT,
} from './actionTypes';

const addValueToInputAC = (data) => ({
  type: ADD_VALUE_TO_INPUT,
  payload: data,
});

const deleteValueFromInputAC = () => ({
  type: DELETE_VALUE_FROM_INPUT,
});

const clearInputAC = () => ({
  type: CLEAR_INPUT,
});

export { addValueToInputAC, deleteValueFromInputAC, clearInputAC };
