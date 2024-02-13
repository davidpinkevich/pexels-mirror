import { memo } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { TypeHeader } from "../Header.types";

const ImageBg = memo(({ random }: TypeHeader) => {
  return (
    <>
      {random && (
        <>
          <img src={random?.src.landscape} alt={random?.alt ?? "background"} />
          <CustomLink
            url={random.photographer_url}
            name={random.photographer}
          />
        </>
      )}
    </>
  );
});

export default ImageBg;
