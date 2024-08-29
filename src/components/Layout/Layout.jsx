import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Layout.module.css";
import loader from "../../assets/img/loader-1.png";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/trucks/selectors";
export default function Layout({ children }) {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <header className={css.header}>
        {isLoading && (
          <div>
            <p className={css.loaderText}>
              On a Quest for Your Ideal Trucks...
            </p>
            <img className={css.loader} src={loader} alt="loader" />
            <div className={css.loaderContainer}></div>
          </div>
        )}
        <div className={css.headerContainer}>
          <Logo />
          <Navigation />
        </div>
      </header>
      {children}
    </>
  );
}
