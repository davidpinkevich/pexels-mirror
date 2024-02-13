import Logo from "../Logo/Logo";
import Search from "../SearchBlock/Search/Search";
import "./StickyHeader.scss";

const StickyHeader = ({ sticky }: { sticky: boolean }) => {
  return (
    <div className="header__sticky">
      <Logo sticky />
      <Search sticky={sticky} />
    </div>
  );
};

export default StickyHeader;
