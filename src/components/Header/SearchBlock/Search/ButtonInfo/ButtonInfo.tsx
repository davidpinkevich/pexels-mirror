import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { hiddenTooltip, getState } from "../../../../../redux/slices";
import IconImage from "./IconImage/IconImage";
import Tooltip from "./Tooltip/Tooltip";
import img from "assets/icons/arrow.svg";
import "./ButtonInfo.scss";

const ButtonInfo = () => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const { tooltip, typeSearch } = useAppSelector(getState);
  const dispatch = useAppDispatch();

  const handlerMouseEnter = () => {
    dispatch(hiddenTooltip(true));
    if (timer) clearInterval(timer);
  };

  const handlerMouseLeave = () => {
    const int = setTimeout(() => dispatch(hiddenTooltip(false)), 150);
    setTimer(int);
  };

  return (
    <div
      className="search__block-info"
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <IconImage isActive={false} type="photo" />
      <p>Фото</p>
      <div className="search__block-info-img">
        <img src={img} className={tooltip ? "tooltip__open" : ""} />
      </div>
      {tooltip && <Tooltip active={typeSearch} />}
    </div>
  );
};

export default ButtonInfo;
