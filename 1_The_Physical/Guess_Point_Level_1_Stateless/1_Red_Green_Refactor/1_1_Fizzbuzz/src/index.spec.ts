import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should accept a number and return a string", () => {
    expect(typeof fizzbuzz(4)).toBe("string");
  });

  it("should not accept numbers less than 1", () => {
    expect(() => fizzbuzz(0)).toThrow("Too small");
  });

  it("should not accept numbers greater than 100", () => {
    expect(() => fizzbuzz(101)).toThrow("Too large");
  });

  it.each([3, 6, 9])(
    "should return 'Fizz' for multiples of three such as %i",
    (number: number) => {
      expect(fizzbuzz(number)).toEqual("Fizz");
    }
  );

  it.each([5, 10, 20])(
    "should return 'Buzz' for multiples of five such as %i",
    (number: number) => {
      expect(fizzbuzz(number)).toEqual("Buzz");
    }
  );

  it.each([15, 30, 45])(
    "should return 'FizzBuzz' for multiples of three and five such as %i",
    (number: number) => {
      expect(fizzbuzz(number)).toEqual("FizzBuzz");
    }
  );

  it.each([
    [1, "1"],
    [2, "2"],
    [4, "4"],
  ])(
    "should return the number as a string for non fizz, buzz, or fizzbuzz numbers such as %i",
    (...[number, result]) => {
      expect(fizzbuzz(number)).toEqual(result);
    }
  );
});
