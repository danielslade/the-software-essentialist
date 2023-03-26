export function isAPalindrome(str: string) {
  const reversed = str.split("").reverse().join("");
  return (
    str.replace(/\s/g, "").toLowerCase() ===
    reversed.replace(/\s/g, "").toLowerCase()
  );
}
