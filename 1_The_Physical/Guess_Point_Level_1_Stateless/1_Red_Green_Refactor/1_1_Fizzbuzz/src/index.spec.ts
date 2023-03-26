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
});
