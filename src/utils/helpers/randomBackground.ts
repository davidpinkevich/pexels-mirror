import { PHOTOS_FOR_PAGE } from "utils/constants";

const randomNumber = (): number => {
  return Math.floor(Math.random() * PHOTOS_FOR_PAGE);
};

export { randomNumber };
