import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETE,
  TOGGLED,
} from './actionType';

export const added = todoText => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = todoId => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      color,
      todoId,
    },
  };
};

export const deleted = todoId => {
  return {
    type: DELETE,
    payload: todoId,
  };
};

export const allcomplete = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearcomplete = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
