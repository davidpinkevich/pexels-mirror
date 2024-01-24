import { PHOTOS_FOR_PAGE } from "utils/constants";
import { TypePhotos } from "components/Photos/Items/Items.types";

const randomBackground = (data: TypePhotos | null) => {
  const number = Math.floor(Math.random() * PHOTOS_FOR_PAGE);
  if (data) return data.photos[number];
};

export { randomBackground };
