import { memo } from "react";
import classNames from "classnames";
import Item from "../Item/Item";
import { TypeColumn } from "./Column.type";
import styles from "./styles.module.scss";

const Column = memo(({ items }: TypeColumn) => {
  return (
    <div className={classNames("pexels__items-column", styles.column__photos)}>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
});

export default Column;
