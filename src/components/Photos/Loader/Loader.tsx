import { PulseLoader } from "react-spinners";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <PulseLoader color="#707776" />
    </div>
  );
};

export default Loader;
