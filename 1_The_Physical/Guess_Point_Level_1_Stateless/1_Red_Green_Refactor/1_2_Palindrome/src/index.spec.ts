import { isAPalindrome } from "./";

describe("palindrome checker", () => {
  it("should exist", () => {
    expect(isAPalindrome).toBeDefined();
  });

  it("should accept a string and return a boolean", () => {
    expect(typeof isAPalindrome("")).toBe("boolean");
  });
});
