import "./CustomLink.scss";
import { TypeCustomLink } from "./CustomLink.types";

const CustomLink = ({ url, name }: TypeCustomLink) => {
  return (
    <div className="header__link-author">
      <a href={url}>
        <p>
          Автор фото - <span>{name}</span>
        </p>
      </a>
    </div>
  );
};

export default CustomLink;
