import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogList.module.css";
import { selectItems } from "../../redux/trucks/selectors";
import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";
import { useState } from "react";
import { activateLoader } from "../../redux/trucks/slice";

export default function CatalogList() {
  const trucks = useSelector(selectItems);
  const [visibleCount, setVisibleCount] = useState(4);
  const dispatch = useDispatch();
  const loadMore = () => {
    dispatch(activateLoader(true));
    setTimeout(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 4, trucks.length));
      dispatch(activateLoader(false));
    }, 500);
  };

  return (
    <>
      <ul className={css.catalogList}>
        {trucks.slice(0, visibleCount).map((truck) => (
          <li className={css.catalogListItem} key={truck.id}>
            <CatalogTruckCard truck={truck} />
          </li>
        ))}
      </ul>

      <button onClick={loadMore} className={css.loadMore}>
        Load more
      </button>
    </>
  );
}
