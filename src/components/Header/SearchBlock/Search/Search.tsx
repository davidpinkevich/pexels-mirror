import { useRef } from "react";
import ButtonInfo from "./ButtonInfo/ButtonInfo";
import Input from "./Input/Input";
import ButtonFind from "./ButtonFind/ButtonFind";
import "./Search.scss";

const Search = ({ sticky }: { sticky: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="search__block">
      <ButtonInfo sticky={sticky} />
      <Input ref={inputRef} />
      <ButtonFind ref={inputRef} />
    </div>
  );
};

export default Search;
