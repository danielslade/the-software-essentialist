import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should accept a number and return a string", () => {
    expect(typeof fizzbuzz(4)).toBe("string");
  });
});
