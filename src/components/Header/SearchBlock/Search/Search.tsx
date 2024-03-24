import { useRef } from "react";
import ButtonInfo from "./ButtonInfo/ButtonInfo";
import Input from "./Input/Input";
import ButtonFind from "./ButtonFind/ButtonFind";
import styles from "./styles.module.scss";

const Search = ({ sticky }: { sticky: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.search__block}>
      <ButtonInfo sticky={sticky} />
      <Input ref={inputRef} />
      <ButtonFind ref={inputRef} />
    </div>
  );
};

export default Search;
