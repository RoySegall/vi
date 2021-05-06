import {isEqual} from 'lodash';

export const findIndexOfNumber = (numbers, numberToFind) => {
  return numbers.findIndex((number) => number === numberToFind);
};

export const getDraggableNumbers = (numbers) => {
  // This are the keys of the number, without any edge cases, can be draggable.
  let draggableNumbersKeys = [-1, 1, 4, 4];

  // Getting the location of the index.
  const zeroIndex = findIndexOfNumber(numbers, 0);

  // After knowing the location of the index we need to exclude numbers from the draggableNumbersKeys so we won't allow
  // to drag a number which not in the correct place. For example, if the zero is in the middle of the matrix the
  // numbers above and on the sides can be dragged. If the zero is on the upper left corner only the numbers below and
  // on the right side can be dragged.

  // todo: do it!

  return numbers.filter((_, index) => {
    return draggableNumbersKeys.includes(index);
  });
};

export const switchNumberWithZero = (numbers, number) => {
  const zeroIndex = findIndexOfNumber(numbers, 0);
  const getIndexOfNumber = findIndexOfNumber(numbers, number);

  numbers[zeroIndex] = number;
  numbers[getIndexOfNumber] = 0;

  return numbers;
};

export const isGameSolved = (row) => {
  return isEqual(row, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]);
};
