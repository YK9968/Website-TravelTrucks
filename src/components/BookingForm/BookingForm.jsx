import { Field, Form, Formik } from "formik";
import css from "./BookingForm.module.css";

export default function BookingForm() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
        <Field
          className={css.inputText}
          type="text"
          name="username"
          placeholder="Name*"
        />
        <Field
          className={css.inputText}
          type="text"
          name="email"
          placeholder="Email*"
        />
        <Field
          className={css.inputText}
          type="text"
          name="bokingDate"
          placeholder="Booking date*"
        />
        <Field
          className={css.inputText}
          type="text"
          name="comment"
          placeholder="Comment"
        />
        <button className={css.button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
