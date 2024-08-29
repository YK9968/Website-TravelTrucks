import css from "./CatalogPage.module.css";
import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters";
import CatalogList from "../../components/CatalogList/CatalogList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTrucks } from "../../redux/trucks/operations";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <div className={css.filterContainer}>
          <Location />
          <Filters />
        </div>
        <div>
          <CatalogList />
        </div>
      </div>
    </section>
  );
}
