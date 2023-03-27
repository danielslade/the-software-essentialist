export function validatePassword(password: string) {
  if (password.length < 5) {
    return {
      valid: false,
      errors: ["PasswordTooShort"],
    };
  }
  if (password.length > 15) {
    return {
      valid: false,
      errors: ["PasswordTooLong"],
    };
  }

  return {
    valid: true,
    errors: [],
  };
}
