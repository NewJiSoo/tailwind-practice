import slice from "./slice";

describe("slice", () => {
  const array = [1, 2, 3];

  it("should use a default `start` of `0` and a default `end` of `length`", () => {
    const actual = slice(array);
    expect(actual).toEqual(array);
    expect(actual).not.toBe(array);
  });

  it("should work with a positive `start`", () => {
    expect(slice(array, 1)).toEqual([2, 3]);
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  it.each([3, 4, 2 ** 32, Infinity])(
    "should work with a `start` >= `length`",
    (start) => {
      expect(slice(array, start)).toEqual([]);
    }
  );

  it("should work with a negative `start`", () => {
    // 코드를 완성하세요.
    expect(slice(array, -1)).toEqual([3]);
    expect(slice(array, -2)).toEqual([2, 3]);
    expect(slice(array, -3)).toEqual([1, 2, 3]);
    expect(slice(array, -4)).toEqual([1, 2, 3]);
  });

  // "should work with a negative `start` <= negative `length`",
  // it.each([-3, -4, -Infinity]) 로 시작하는 테스트 코드를 작성하세요.
  it.each([-3, -4, -Infinity])("should work with a negative `start` <= negative `length`", (start) => {
    expect(slice(array, start)).toEqual([1, 2, 3]);
  });

  it.each([2, 3])("should work with `start` >= `end`", (start) => {
    // 코드를 완성하세요.
    expect(slice(array, start, start - 1)).toEqual([]);
    expect(slice(array, start, start)).toEqual([]);
  });

  it("should work with a positive `end`", () => {
    // 코드를 완성하세요.
    expect(slice(array, 1, 2)).toEqual([2]);
    expect(slice(array, 0, 2)).toEqual([1, 2]);
  });

  // "should work with a `end` >= `length`",
  // it.each([3, 4, 2 ** 32, Infinity]) 로 시작하는 테스트 코드를 작성하세요.
  it.each([3, 4, 2 ** 32, Infinity])("should work with a `end` >= `length`", (end) => {
    expect(slice(array, 1, end)).toEqual([2, 3])
  })
});