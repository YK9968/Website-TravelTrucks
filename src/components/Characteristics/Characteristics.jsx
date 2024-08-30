import css from "./Characteristics.module.css";
export default function Characteristics({ truckInfo }) {
  const { consumption, tank, length, width, form, height } = truckInfo;
  return (
    <ul className={css.charactList}>
      <li className={css.charactItem}>
        <p>Form</p>
        <p>{form}</p>
      </li>
      <li className={css.charactItem}>
        <p>Length</p>
        <p>{length}</p>
      </li>
      <li className={css.charactItem}>
        <p>Width</p>
        <p>{width}</p>
      </li>
      <li className={css.charactItem}>
        <p>Height</p>
        <p>{height}</p>
      </li>
      <li className={css.charactItem}>
        <p>Tank</p>
        <p>{tank}</p>
      </li>
      <li className={css.charactItem}>
        <p>Consumption</p>
        <p>{consumption}</p>
      </li>
    </ul>
  );
}
