type PasswordValidationError =
  | "PasswordTooShort"
  | "PasswordTooLong"
  | "DigitMissing"
  | "UppercaseMissing";

export type PasswordValidationResult = {
  valid: boolean;
  errors: PasswordValidationError[];
};

export function validatePassword(password: string): PasswordValidationResult {
  const result: PasswordValidationResult = { valid: true, errors: [] };

  if (password.length < 5) {
    result.errors.push("PasswordTooShort");
  } else if (password.length > 15) {
    result.errors.push("PasswordTooLong");
  }

  if (!containsDigit(password)) {
    result.errors.push("DigitMissing");
  }
  if (!containsUppercase(password)) {
    result.errors.push("UppercaseMissing");
  }

  if (result.errors.length > 0) {
    result.valid = false;
  }

  return result;
}

function containsDigit(str: string): boolean {
  const digitRegex = /\d/;
  return digitRegex.test(str);
}

function containsUppercase(str: string): boolean {
  const uppercaseRegex = /[A-Z]/;
  return uppercaseRegex.test(str);
}
