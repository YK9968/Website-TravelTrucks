import { useSelector } from "react-redux";
import css from "./TruckFeatures.module.css";
import { selectTruckItems } from "../../redux/truck/selectors";
import BookingForm from "../BookingForm/BookingForm";

import Category from "../Category/Category";
import Characteristics from "../Characteristics/Characteristics";

export default function TruckFeatures() {
  const truckInfo = useSelector(selectTruckItems);

  return (
    <div className={css.featuresContainer}>
      <div className={css.featuresInfo}>
        <Category truckInfo={truckInfo} />
        <div className={css.characteristics}>
          <h2 className={css.subTitle}>Vehicle details</h2>
          <Characteristics truckInfo={truckInfo} />
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
