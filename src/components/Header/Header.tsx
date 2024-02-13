import { memo } from "react";
import ImageBg from "./ImageBg/ImageBg";
import Logo from "./Logo/Logo";
import SearchBlock from "./SearchBlock/SearchBlock";
import { TypeHeader } from "./Header.types";
import "./Header.scss";

const Header = memo(({ random }: TypeHeader) => {
  return (
    <header className="pexels__header header">
      <Logo sticky={false} />
      <SearchBlock />
      <ImageBg random={random} />
    </header>
  );
});

export default Header;
