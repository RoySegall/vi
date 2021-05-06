import {getDraggableNumbers, isGameSolved, findIndexOfNumber, switchNumberWithZero} from "./Utils";

describe('Utils', () => {

  const zeroAtTheBeginning = [0,1,2,3,6,7,9];
  const zeroAtTheMiddle = [1,2,3,0,7,9,6];
  const zeroAtTheEnd = [1,2,3,7,9,6,0];

  it('findIndexOfNumber: Getting the index a number', () => {
    expect(findIndexOfNumber(zeroAtTheBeginning, 0)).toBe(0);
    expect(findIndexOfNumber(zeroAtTheMiddle, 0)).toBe(3);
    expect(findIndexOfNumber(zeroAtTheEnd, 0)).toBe(6);

    expect(findIndexOfNumber(zeroAtTheBeginning, 3)).toBe(3);
    expect(findIndexOfNumber(zeroAtTheMiddle, 6)).toBe(6);
    expect(findIndexOfNumber(zeroAtTheEnd, 2)).toBe(1);
  });

  it('switchNumberWithZero: Replace a number with zero', () => {
    expect(switchNumberWithZero(zeroAtTheBeginning, 3)).toStrictEqual([3,1,2,0,6,7,9]);
    expect(switchNumberWithZero(zeroAtTheMiddle, 7)).toStrictEqual([1,2,3,7,0,9,6]);
    expect(switchNumberWithZero(zeroAtTheEnd, 1)).toStrictEqual([0,2,3,7,9,6,1]);
  });

  it('isGameSolved: Verify the row is solved', () => {
    expect(isGameSolved([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0])).toBeTruthy();
    expect(isGameSolved([1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,10])).toBeFalsy();
  });

  it('getDraggableNumbers: Testing which number is draggable', () => {
    expect(getDraggableNumbers(
      [
        1,  2,  3,  4,
        5,  6,  7,  0,
        8,  9,  10, 11,
        12, 13, 14, 15
      ]
    )).toStrictEqual([4, 7]);

    expect(getDraggableNumbers(
      [
        1,  2,  3,  4,
        5,  6,  0,  7,
        8,  9,  10, 11,
        12, 13, 14, 15
      ]
    )).toStrictEqual([3, 6, 7, 10]);

    expect(getDraggableNumbers(
      [
        1,  2,  3,  4,
        0,  5,  6,  7,
        8,  9,  10, 11,
        12, 13, 14, 15
      ]
    )).toStrictEqual([1,8,5]);

    expect(getDraggableNumbers(
      [
        1,  2,  3,  4,
        12, 5,  6,  7,
        8,  9,  10, 11,
        0,  13, 14, 15
      ]
    )).toStrictEqual([8,13]);

    expect(getDraggableNumbers(
      [
        1,  2,  3,  4,
        12, 5,  6,  7,
        8,  9,  10, 11,
        15, 13, 14, 0
      ]
    )).toStrictEqual([11,14]);

    expect(getDraggableNumbers(
      [
        0,  2,  3,  4,
        12, 5,  6,  7,
        8,  9,  10, 11,
        15, 13, 14, 1
      ]
    )).toStrictEqual([2,12]);

    expect(getDraggableNumbers(
      [
        2,  2,  0,  4,
        12, 5,  6,  7,
        8,  9,  10, 11,
        15, 13, 14, 1
      ]
    )).toStrictEqual([2, 4, 6]);

    expect(getDraggableNumbers(
      [
        2,  2,  4,  0,
        12, 5,  6,  7,
        8,  9,  10, 11,
        15, 13, 14, 1
      ]
    )).toStrictEqual([4, 7]);
  });

})
