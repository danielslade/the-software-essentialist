export function fizzbuzz(number: number): string {
  if (number < 1) {
    throw new Error("Too small");
  }
  if (number > 100) {
    throw new Error("Too large");
  }

  if (number % 3 === 0) {
    return "Fizz";
  }

  return "";
}
