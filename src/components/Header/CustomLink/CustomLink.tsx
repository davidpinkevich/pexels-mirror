import { TypeCustomLink } from "./CustomLink.types";
import styles from "./styles.module.scss";

const CustomLink = ({ url, name }: TypeCustomLink) => {
  return (
    <div className={styles.header__link_author}>
      <a href={url} target="blank">
        <p>
          Автор фото - <span>{name}</span>
        </p>
      </a>
    </div>
  );
};

export default CustomLink;
