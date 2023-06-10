export const generateUniqueNumbers = (count: number, min: number, max: number): number[] => {
  let numbers = new Set();
  while (numbers.size < count) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.add(num);
  }
  return Array.from(numbers) as number[];
};
