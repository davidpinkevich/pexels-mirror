import { TypePhotos } from "components/Photos/Items/Items.types";

const createColumns = (photos: TypePhotos | null, width: number) => {
  const arr = [];
  const step = width <= 900 ? 2 : 3;
  if (photos) {
    const chunk = Math.ceil(photos.length / step);
    for (let i = 0; i < photos.length; i += chunk) {
      arr.push(photos.slice(i, i + chunk));
    }
  }
  return arr;
};

export { createColumns };
