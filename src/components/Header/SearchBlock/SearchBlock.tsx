import Search from "./Search/Search";
import Trands from "./Trands/Trands";
import "./SearchBlock.scss";

const SearchBlock = () => {
  return (
    <div className="header__search search">
      <h2 className="search__title">
        Лучшие бесплатные стоковые фото, изображения без роялти и видео от
        талантливых авторов.
      </h2>
      <Search sticky={false} />
      <Trands />
    </div>
  );
};

export default SearchBlock;
