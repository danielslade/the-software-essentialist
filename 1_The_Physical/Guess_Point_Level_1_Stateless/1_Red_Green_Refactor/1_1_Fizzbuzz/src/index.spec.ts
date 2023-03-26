import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should accept a number and return a string", () => {
    expect(typeof fizzbuzz(4)).toBe("string");
  });

  it("should not expect numbers less than 1", () => {
    expect(() => fizzbuzz(0)).toThrow("Too small");
  });
});
