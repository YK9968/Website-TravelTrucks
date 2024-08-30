import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/trucks/selectors";
import Loader from "../Loader/Loader";
import { selectTruckLoading } from "../../redux/truck/selectors";
export default function Layout({ children }) {
  const allTrucksLoading = useSelector(selectLoading);
  const truckLoading = useSelector(selectTruckLoading);

  return (
    <>
      <header className={css.header}>
        {(allTrucksLoading && <Loader />) || (truckLoading && <Loader />)}
        <div className={css.headerContainer}>
          <Logo />
          <Navigation />
        </div>
      </header>
      {children}
    </>
  );
}
