export type TypePhoto = {
  id: number;
  photographer: string;
  photographer_url: string;
  url: string;
  alt: string;
  src: {
    landscape: string;
  };
};

export type TypePhotos = {
  photos: Array<TypePhoto>;
};
