import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { ErrorMessage } from "formik";
import toast from "react-hot-toast";
import Calendar from "../Calendar/Calendar";

export default function BookingForm() {
  const initialValues = {
    username: "",
    email: "",
    bokingDate: "",
    comment: "",
  };
  const handleSubmit = (value, actions) => {
    console.log(value);
    // dispatch(someOperation(value)) - якщо було б куди відправляти
    actions.resetForm();
    toast.success(
      "Success! Your submission was received. We will get back to you soon"
    );
  };

  const validation = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Required")
      .matches(
        /^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Must be a valid email!"
      ),
    bokingDate: Yup.date().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form} autoComplete="off">
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
          <Calendar name="bokingDate" />
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
