import { NavLink, Outlet, useParams } from "react-router-dom";
import css from "./DetailsTruckPage.module.css";
import { useEffect, useState } from "react";
import { fetchTrucksById } from "../../utils/getCardById";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { getRandomImg } from "../../utils/getRundomFoto";
import { changeActivePage } from "../../utils/activePage";

export default function DetailsTruckPage() {
  const { truckId } = useParams();
  const [truckInfo, setTruckInfo] = useState(null);
  const [randomImg, setRandomImg] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetchTrucksById(truckId);
      setTruckInfo(response);
      setRandomImg(getRandomImg());
    }
    fetchData();
  }, [truckId]);

  if (!truckInfo) {
    return;
  }

  const { name, price, rating, location, description, reviews, gallery } =
    truckInfo;

  return (
    <section className={css.truckInfoSection}>
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
            className={(isActive) =>
              changeActivePage(isActive, css.active, css.link)
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
