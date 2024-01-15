import CustomLink from "../CustomLink/CustomLink";
import { TypeHeader } from "../Header.types";

const ImageBg = ({ photo }: TypeHeader) => {
  return (
    <>
      {photo && (
        <>
          <img src={photo?.src.landscape} alt={photo?.alt ?? "background"} />
          <CustomLink url={photo.photographer_url} name={photo.photographer} />
        </>
      )}
    </>
  );
};

export default ImageBg;
