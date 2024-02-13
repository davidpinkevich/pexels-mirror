import { createRandomArray } from "utils/helpers/randomArray";
import { LINKS } from "utils/constants";
import "./Trands.scss";

const Trands = () => {
  return (
    <div className="search__trands">
      <p>Тендценции:</p>
      <div className="search__trands-links">
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
