import classNames from "classnames";

const addClassColumns = (width: number, height: number) => {
  if (height > width) {
    return classNames("column__photos-item photo", "photo__height");
  } else {
    return classNames("column__photos-item photo", "photo__width");
  }
};

export { addClassColumns };
