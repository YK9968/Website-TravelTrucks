import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/trucks/selectors";
import Loader from "../Loader/Loader";
export default function Layout({ children }) {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <header className={css.header}>
        {isLoading && <Loader />}
        <div className={css.headerContainer}>
          <Logo />
          <Navigation />
        </div>
      </header>
      {children}
    </>
  );
}
