import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchPhotos, getAllPhotos } from "../../redux/slices";
import { LogicTypesMain } from "./MainPage.types";

interface ScrollEvent extends Event {
  target: Document;
  currentTarget: Document;
}

export const useLogic = (): LogicTypesMain => {
  const [current, setCurrent] = useState(1);
  const [fetched, setFetched] = useState(true);
  const [sticky, setSticky] = useState(false);
  const photos = useAppSelector(getAllPhotos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (fetched) {
      dispatch(fetchPhotos(current));
      setCurrent((prevState) => prevState + 1);
      setFetched(false);
    }
  }, [fetched]);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = (e: Event) => {
    if (window.scrollY > 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    const scrollEvent = e as ScrollEvent;
    if (
      scrollEvent.target !== null &&
      scrollEvent.target.documentElement.scrollHeight -
        window.innerHeight -
        1600 <
        window.pageYOffset
    ) {
      setFetched(true);
    }
  };
  return { photos, sticky };
};
