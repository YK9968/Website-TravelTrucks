import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./DetailsTruckPage.module.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { getRandomImg } from "../../utils/getRundomFoto";
import { changeActivePage } from "../../utils/activePage";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTruckItems,
  selectTruckLoading,
} from "../../redux/truck/selectors";
import { fetchTruck } from "../../redux/truck/operation";

export default function DetailsTruckPage() {
  const { truckId } = useParams();
  const truckInfo = useSelector(selectTruckItems);
  const [randomImg, setRandomImg] = useState("");
  const path = useLocation();
  const isLoading = useSelector(selectTruckLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTruck(truckId));
    setRandomImg(getRandomImg());
  }, [dispatch, truckId]);

  if (truckInfo.length === 0) {
    return;
  }

  const { name, price, rating, location, description, reviews, gallery } =
    truckInfo;

  return (
    <section className={css.truckInfoSection}>
      {isLoading && <Loader />}
      <div className={css.truckInfoContainer}>
        <h2 className={css.truckName}>{name}</h2>
        <div className={css.subContainer}>
          <div className={css.ratingContainer}>
            <HiStar className={css.iconStar} />
            <p className={css.rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationContainer}>
            <CiMap className={css.iconMap} />
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <h2 className={css.truckPrice}>€{price}</h2>
      </div>

      <ul className={css.galleryList}>
        {gallery.map((image) => (
          <li className={css.galleryListItem} key={image.original}>
            <img className={css.truckImg} src={image.thumb} alt="photo truck" />
          </li>
        ))}
        <li className={css.galleryListItem}>
          <img className={css.truckImg} src={randomImg} alt="photo truck" />
        </li>
      </ul>
      <p className={css.textDescriprion}>{description}</p>
      <ul className={css.listLinks}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive || !path.pathname.includes("reviews")
                ? css.active
                : css.link
            }
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) =>
              changeActivePage(isActive, css.active, css.link)
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}
