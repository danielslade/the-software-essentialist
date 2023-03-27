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

  it("should return 'uppercase missing' for passwords like 'seven11' that are the correct length and contain a digit but missing an uppercase character", () => {
    const passwordToCheck = "seven11";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("UppercaseMissing");
  });

  it("should return 'uppercase missing' and 'password too short' errors for passwords like 'sh0' that are less than 5 digits and contain a digit but are missing an uppercase character", () => {
    const passwordToCheck = "sh0";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("UppercaseMissing");
    expect(result.errors).toContain("PasswordTooShort");
  });

  it("should return 'password too short' and not 'uppercase missing' or 'missing digit' for passwords like 'Two2' that are less than 5 characters but do contain an uppercase character and a digit", () => {
    const passwordToCheck = "Two2";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors).toContain("PasswordTooShort");
    expect(result.errors).not.toContain("DigitMissing");
    expect(result.errors).not.toContain("UppercaseMissing");
  });

  it("should return 3 errors when there is no uppercase letter or digit where the password is too long like 'sillysillypassword'", () => {
    const passwordToCheck = "sillysillypassword";
    const result = validatePassword(passwordToCheck);
    expect(result.valid).toBeFalsy();
    expect(result.errors.length).toEqual(3);
    expect(result.errors).toContain("PasswordTooLong");
    expect(result.errors).toContain("DigitMissing");
    expect(result.errors).toContain("UppercaseMissing");
  });
});
