import { addSpace } from "../../utils/addSpaceInWord";
import css from "./Characteristics.module.css";
export default function Characteristics({ truckInfo }) {
  const { consumption, tank, length, width, form, height } = truckInfo;
  return (
    <ul className={css.charactList}>
      <li className={css.charactItem}>
        <p>Form</p>
        <p className={css.typeText}>{addSpace(form)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Length</p>
        <p>{length.slice(0, -1) + " " + length.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Width</p>
        <p>{width.slice(0, -1) + " " + width.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Height</p>
        <p>{height.slice(0, -1) + " " + height.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Tank</p>
        <p>{tank.slice(0, -1) + " " + tank.slice(-1)}</p>
      </li>
      <li className={css.charactItem}>
        <p>Consumption</p>
        <p>
          {consumption.slice(0, consumption.length - 2) +
            " " +
            consumption.slice(consumption.length - 2)}
        </p>
      </li>
    </ul>
  );
}
