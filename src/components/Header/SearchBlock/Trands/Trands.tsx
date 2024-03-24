import { createRandomArray } from "utils/helpers/randomArray";
import { LINKS } from "utils/constants";
import styles from "./styles.module.scss";

const Trands = () => {
  return (
    <div className={styles.search__trands}>
      <p>Тендценции:</p>
      <div className={styles.search__trands_links}>
        {createRandomArray(7).map((elem: string, index: number) => {
          return (
            <a key={index} href={`${LINKS.SEARCH}${elem}/`}>
              {elem}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Trands;
