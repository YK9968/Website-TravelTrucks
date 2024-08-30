import css from "./NotFound.module.css";
import img404 from "../../assets/img/404-3.jpg";

export default function NotFound() {
  return <img className={css.imageNotFound} src={img404} alt="image 404" />;
}
