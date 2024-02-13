import { memo } from "react";
import Column from "../Column/Column";
import Loader from "../Loader/Loader";
import { createColumns } from "utils/helpers/createColumns";
import { useLogicItems } from "./useLogicItems";
import { PropsPhotos } from "./Items.types";
import "./Items.scss";

const Items = memo(({ photos }: PropsPhotos) => {
  const { loading, windowWidth } = useLogicItems();
  return (
    <div className="pexels__items">
      {createColumns(photos, windowWidth).map((items, i) => (
        <Column key={i} items={items} />
      ))}
      {loading && <Loader />}
    </div>
  );
});

export default Items;
