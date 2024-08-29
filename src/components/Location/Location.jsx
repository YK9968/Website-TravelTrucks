import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";

export default function Location() {
  return (
    <label className={css.labelLocation} htmlFor="location">
      Location
      <CiMap className={css.icon} />
      <input
        className={css.inputLocation}
        id="location"
        type="text"
        placeholder="City"
      />
    </label>
  );
}
