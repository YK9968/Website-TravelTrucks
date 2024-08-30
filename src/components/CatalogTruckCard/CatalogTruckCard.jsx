import {
  BsCupHot,
  BsDiagram3,
  BsDisplay,
  BsDroplet,
  BsFuelPump,
  BsSuitHeart,
  BsUiRadios,
  BsWind,
} from "react-icons/bs";
import css from "./CatalogTruckCard.module.css";
import { HiStar } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { TbFridge, TbMicrowave } from "react-icons/tb";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaFireBurner } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CatalogTruckCard({ truck }) {
  const {
    name,
    price,
    rating,
    location,
    description,
    reviews,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
    id,
  } = truck;

  return (
    <>
      <div className={css.imgContainer}>
        <img className={css.img} src={gallery[0].thumb} alt="Truck" />
      </div>
      <div className={css.truckInfo}>
        <div className={css.costContainer}>
          <h2 className={css.truckName}>{name}</h2>
          <div className={css.priceContainer}>
            <h2 className={css.truckPrice}>€{price}</h2>
            <button type="button" className={css.buttonHeart}>
              <BsSuitHeart className={css.heartIcon} />
            </button>
          </div>
        </div>
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
        <p className={css.description}>{description}</p>
        <div className={css.categoryContainer}>
          <ul className={css.listCategory}>
            <li className={css.category}>
              <BsDiagram3 className={css.iconCategory} />
              <p className={css.categoryText}>{transmission}</p>
            </li>
            <li className={css.category}>
              <BsFuelPump className={css.iconCategory} />
              <p className={css.categoryText}>{engine}</p>
            </li>
            {AC && (
              <li className={css.category}>
                <BsWind className={css.iconCategory} />
                <p className={css.categoryText}>AC</p>
              </li>
            )}
            {kitchen && (
              <li className={css.category}>
                <BsCupHot className={css.iconCategory} />
                <p className={css.categoryText}>Kitchen</p>
              </li>
            )}
            {refrigerator && (
              <li className={css.category}>
                <TbFridge className={css.iconCategory} />
                <p className={css.categoryText}>Refrigerator</p>
              </li>
            )}
            {radio && (
              <li className={css.category}>
                <BsUiRadios className={css.iconCategory} />
                <p className={css.categoryText}>Radio</p>
              </li>
            )}
            {bathroom && (
              <li className={css.category}>
                <BsDroplet className={css.iconCategory} />
                <p className={css.categoryText}>Bathroom</p>
              </li>
            )}
            {microwave && (
              <li className={css.category}>
                <TbMicrowave className={css.iconCategory} />
                <p className={css.categoryText}>Microwave</p>
              </li>
            )}
            {TV && (
              <li className={css.category}>
                <BsDisplay className={css.iconCategory} />
                <p className={css.categoryText}>TV</p>
              </li>
            )}
            {gas && (
              <li className={css.category}>
                <FaFireBurner className={css.iconCategory} />
                <p className={css.categoryText}>Gas</p>
              </li>
            )}
            {water && (
              <li className={css.category}>
                <FaHandHoldingWater className={css.iconCategory} />
                <p className={css.categoryText}>Water</p>
              </li>
            )}
          </ul>
        </div>
        <Link className={css.link} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </>
  );
}
