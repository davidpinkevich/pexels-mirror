import IconImage from "../IconImage/IconImage";
import { PropsTooltip } from "./Tooltip.types";
import styles from "./styles.module.scss";

const Tooltip = ({ active }: PropsTooltip) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltip__item}>
        <IconImage type="photo" isActive={active === "photo"} />
        <p style={{ color: active === "photo" ? "#07a081" : "black" }}>Фото</p>
      </div>
      <div className={styles.tooltip__item}>
        <IconImage type="video" isActive={active === "video"} />
        <p style={{ color: active === "video" ? "#07a081" : "black" }}>
          Для видео
        </p>
      </div>
    </div>
  );
};

export default Tooltip;
