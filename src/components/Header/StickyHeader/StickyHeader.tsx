import Logo from "../Logo/Logo";
import Search from "../SearchBlock/Search/Search";
import styles from "./styles.module.scss";

const StickyHeader = ({ sticky }: { sticky: boolean }) => {
  return (
    <div className={styles.header__sticky}>
      <Logo sticky />
      <Search sticky={sticky} />
    </div>
  );
};

export default StickyHeader;
