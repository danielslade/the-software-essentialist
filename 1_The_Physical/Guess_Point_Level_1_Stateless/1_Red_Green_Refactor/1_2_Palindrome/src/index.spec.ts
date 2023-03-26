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
});
