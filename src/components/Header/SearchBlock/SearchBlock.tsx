import classNames from "classnames";
import Search from "./Search/Search";
import Trands from "./Trands/Trands";
import styles from "./styles.module.scss";

const SearchBlock = () => {
  return (
    <div className={classNames("header__search", styles.search)}>
      <h2 className={styles.search__title}>
        Лучшие бесплатные стоковые фото, изображения без роялти и видео от
        талантливых авторов.
      </h2>
      <Search sticky={false} />
      <Trands />
    </div>
  );
};

export default SearchBlock;
