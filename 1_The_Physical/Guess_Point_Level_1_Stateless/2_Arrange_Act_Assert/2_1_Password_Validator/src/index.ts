export function validatePassword(password: string) {
  return {
    valid: false,
    errors: ["PasswordTooShort"],
  };
}
