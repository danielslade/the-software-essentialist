import { isAPalindrome } from "./";

describe("palindrome checker", () => {
  it("should exist", () => {
    expect(isAPalindrome).toBeDefined();
  });

  it("should accept a string and return a boolean", () => {
    expect(typeof isAPalindrome("")).toBe("boolean");
  });

  it.each(["mom", "wow"])(
    "should identify that %s is a palindrome",
    (str: string) => {
      expect(isAPalindrome(str)).toBeTruthy();
    }
  );

  it("should identify that 'bill' is not a plaindrome", () => {
    expect(isAPalindrome("bill")).toBeFalsy();
  });
});
