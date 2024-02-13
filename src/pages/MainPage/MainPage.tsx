import Header from "components/Header/Header";
import Items from "components/Photos/Items/Items";
import StickyHeader from "components/Header/StickyHeader/StickyHeader";
import { RANDOM_PHOTO } from "utils/constants";
import { useLogic } from "./useLogic";

const MainPage = () => {
  const { photos, sticky } = useLogic();

  return (
    <div className="pexels">
      <Header random={photos[RANDOM_PHOTO]} />
      {sticky && <StickyHeader sticky />}
      {photos && <Items photos={photos} />}
    </div>
  );
};

export default MainPage;
