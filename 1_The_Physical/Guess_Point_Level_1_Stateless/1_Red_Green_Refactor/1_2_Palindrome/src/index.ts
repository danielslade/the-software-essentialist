const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const removeSpaces = (str: string): string => {
  return str.replace(/\s/g, "");
};

export function isAPalindrome(str: string) {
  const check = removeSpaces(str).toLowerCase();
  const reversed = reverseString(check);
  return check === reversed;
}
