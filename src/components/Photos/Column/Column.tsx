import { memo } from "react";
import Item from "../Item/Item";
import { TypeColumn } from "./Column.type";
import "./Column.scss";

const Column = memo(({ items }: TypeColumn) => {
  return (
    <div className="pexels__items-column column__photos">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
});

export default Column;
