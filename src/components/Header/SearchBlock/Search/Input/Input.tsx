import { forwardRef, ForwardedRef, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Input = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
  const navigate = useNavigate();
  const handleClick = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ref && "current" in ref && ref.current?.value) {
      if (event.code === "Enter") navigate(`search/${ref.current?.value}/`);
    }
  };
  return (
    <div className={styles.search__block_input}>
      <input
        ref={ref}
        onKeyDown={handleClick}
        type="text"
        placeholder="Поиск бесплатных изображений"
      />
    </div>
  );
});

export default Input;
