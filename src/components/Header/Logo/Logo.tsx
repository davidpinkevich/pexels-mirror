import classNames from "classnames";
import { LINKS } from "utils/constants";
import img from "../../../assets/icons/logo.svg";
import styles from "./styles.module.scss";

const Logo = ({ sticky }: { sticky: boolean }) => {
  const color = sticky ? styles.logo__name_black : styles.logo__name_white;
  return (
    <a href={LINKS.MAIN} className={classNames("header__logo", styles.logo)}>
      <div className={styles.logo__img}>
        <img src={img} alt="logo" />
      </div>
      <p className={color}>Pexels</p>
    </a>
  );
};

export default Logo;
