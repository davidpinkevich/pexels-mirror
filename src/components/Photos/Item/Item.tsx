import { memo } from "react";
import { addClassColumns } from "utils/helpers/addClassColumns";
import { TypePhoto } from "./Item.types";
import "./Item.scss";

const Item = memo((props: TypePhoto) => {
  return (
    <div
      style={{ backgroundColor: props.avg_color }}
      className={addClassColumns(props.width, props.height)}
    >
      <img src={props.src.large} />
    </div>
  );
});

export default Item;
