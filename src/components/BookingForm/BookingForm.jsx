import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { ErrorMessage } from "formik";

export default function BookingForm() {
  const initialValues = {
    username: "",
    email: "",
    bokingDate: "",
    comment: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const validation = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    bokingDate: Yup.string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(20[2-9][0-9])$/,
        "Must be a valid date format like 12.12.2024."
      )
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.errorContainer}>
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />

          <Field
            className={css.inputText}
            type="text"
            name="username"
            placeholder="Name*"
          />
        </div>
        <div className={css.errorContainer}>
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field
            className={css.inputText}
            type="text"
            name="email"
            placeholder="Email*"
          />
        </div>

        <div className={css.errorContainer}>
          <ErrorMessage
            className={css.error}
            name="bokingDate"
            component="span"
          />
          <Field
            className={css.inputText}
            type="text"
            name="bokingDate"
            placeholder="Booking date*"
          />
        </div>

        <Field
          className={css.inputComent}
          as="textarea"
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
