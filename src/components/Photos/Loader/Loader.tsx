import { PulseLoader } from "react-spinners";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <PulseLoader color="#707776" />
    </div>
  );
};

export default Loader;
