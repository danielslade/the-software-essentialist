import { validatePassword } from "./index";

describe("password validator", () => {
  it("should return a 'password too short' error for passwords like 'abc' that are less than 5 characters", () => {
    const passwordToCheck = "abc";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("PasswordTooShort");
  });

  it("should return a 'password too long' error for passwords like 'abcdefghijklmnop' that are longer than 15 characters", () => {
    const passwordToCheck = "abcdefghijklmnop";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("PasswordTooLong");
  });

  it("should return a 'missing digit' error for a password like 'classic' that does not contain a digit", () => {
    const passwordToCheck = "classic";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("DigitMissing");
  });

  it("should return 'missing digit' and 'password too short' errors for passwords like 'four' that are less than 5 characters and do not contain a digit", () => {
    const passwordToCheck = "four";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("DigitMissing");
    expect(result.errors).toContain("PasswordTooShort");
  });

  it("should return 'password too short' and not 'missing digit' for passwords like 'two2' that are less than 5 characters but contain a digit", () => {
    const passwordToCheck = "two2";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("PasswordTooShort");
    expect(result.errors).not.toContain("DigitMissing");
  });
});
