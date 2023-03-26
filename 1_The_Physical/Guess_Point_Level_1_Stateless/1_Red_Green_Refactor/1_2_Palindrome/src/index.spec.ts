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

  it("should still be able to identify a palindrome like 'Mom' even if the casing is off", () => {
    expect(isAPalindrome("Mom")).toBeTruthy();
  });

  it.each(["Was It A Rat I Saw", "Never Odd or Even"])(
    "should be able to identify that a phrase like '%s' is a palindrome",
    (str: string) => {
      expect(isAPalindrome(str)).toBeTruthy();
    }
  );
});
