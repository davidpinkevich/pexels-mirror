import { memo } from "react";
import classNames from "classnames";
import ImageBg from "./ImageBg/ImageBg";
import Logo from "./Logo/Logo";
import SearchBlock from "./SearchBlock/SearchBlock";
import { TypeHeader } from "./Header.types";
import styles from "./styles.module.scss";

const Header = memo(({ random }: TypeHeader) => {
  return (
    <header className={classNames("pexels__header", styles.header)}>
      <Logo sticky={false} />
      <SearchBlock />
      <ImageBg random={random} />
    </header>
  );
});

export default Header;
