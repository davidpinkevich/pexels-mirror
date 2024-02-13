import { LINKS } from "utils/constants";
import img from "../../../assets/icons/logo.svg";
import "./Logo.scss";

const Logo = ({ sticky }: { sticky: boolean }) => {
  return (
    <a href={LINKS.MAIN} className="header__logo logo">
      <div className="logo__img">
        <img src={img} alt="logo" />
      </div>
      <p className={sticky ? "logo__name-black" : "logo__name-white"}>Pexels</p>
    </a>
  );
};

export default Logo;
