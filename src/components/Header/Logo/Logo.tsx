import { LINKS } from "utils/constants";
import img from "../../../assets/icons/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <a href={LINKS.MAIN} className="header__logo logo">
      <div className="logo__img">
        <img src={img} alt="logo" />
      </div>
      <p className="logo__name">Pexels</p>
    </a>
  );
};

export default Logo;
