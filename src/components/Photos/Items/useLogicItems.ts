import { useState, useEffect } from "react";
import { useAppSelector } from "hooks";
import { getState } from "../../../redux/slices";

const useLogicItems = () => {
  const { loading } = useAppSelector(getState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { loading, windowWidth };
};

export { useLogicItems };
