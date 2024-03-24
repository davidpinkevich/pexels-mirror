import { useState } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "hooks";
import { hiddenTooltip, getState } from "../../../../../redux/slices";
import IconImage from "./IconImage/IconImage";
import Tooltip from "./Tooltip/Tooltip";
import img from "assets/icons/arrow.svg";
import styles from "./styles.module.scss";

const ButtonInfo = ({ sticky }: { sticky: boolean }) => {
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
      className={
        sticky
          ? classNames(styles.search__block_info, styles.sticky__info)
          : styles.search__block_info
      }
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <IconImage isActive={false} type="photo" />
      <p>Фото</p>
      <div className={styles.search__block_info_img}>
        <img src={img} className={tooltip ? styles.tooltip__open : ""} />
      </div>
      {tooltip && <Tooltip active={typeSearch} />}
    </div>
  );
};

export default ButtonInfo;
