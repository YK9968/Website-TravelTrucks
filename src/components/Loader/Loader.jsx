import css from "./Loader.module.css";
import loader from "../../assets/img/loader-1.png";
export default function Loader() {
  return (
    <div>
      <p className={css.loaderText}>On a Quest for Your Ideal Trucks...</p>
      <img className={css.loader} src={loader} alt="loader" />
      <div className={css.loaderContainer}></div>
    </div>
  );
}
