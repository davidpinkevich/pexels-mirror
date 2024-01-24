import { CATEGORIES } from "utils/constants";

const createRandomArray = (elements: number): string[] | [] => {
  const newArray = new Set();
  while (newArray.size < elements) {
    const newValue = Math.floor(Math.random() * 40);
    newArray.add(newValue);
  }
  return Array.from(newArray).map((elem) => CATEGORIES[elem as number]);
};

export { createRandomArray };
