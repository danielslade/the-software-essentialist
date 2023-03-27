const isMultiple = (denominator: number) => (numerator: number) =>
  numerator % denominator === 0;
const isMultipleOf3 = isMultiple(3);
const isMultipleOf5 = isMultiple(5);

export function fizzbuzz(number: number): string {
  if (number < 1) {
    throw new Error("Too small");
  }
  if (number > 100) {
    throw new Error("Too large");
  }

  if (isMultipleOf3(number) && isMultipleOf5(number)) {
    return "FizzBuzz";
  }
  if (isMultipleOf3(number)) {
    return "Fizz";
  }
  if (isMultipleOf5(number)) {
    return "Buzz";
  }

  return number.toString();
}
