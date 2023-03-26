export function isAPalindrome(str: string) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
