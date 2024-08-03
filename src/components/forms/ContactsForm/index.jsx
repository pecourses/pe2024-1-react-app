import { ErrorMessage, Field, Form, Formik } from "formik";
import { CONTACTS_VALIDATION_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./ContactsForm.module.sass";

// Name, Tel, Email, Birthday
// userName, phoneNumber, email, birthday
function ContactsForm() {
  const initialValues = {
    userName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
  };

  const handleSubmit = (value, formikBag) => {
    console.log(value);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CONTACTS_VALIDATION_SCHEMA}
      >
        {formikProps => (
          <Form className={styles.form}>
            <label className={styles.label}>
              <span className={styles.inputCaption}>Name: </span>
              <Field
                className={styles.input}
                type="text"
                name="userName"
                placeholder="User Name"
                autoFocus
              />
              <ErrorMessage
                className={styles.error}
                name="userName"
                component="span"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.inputCaption}>Phone: </span>
              <Field
                className={styles.input}
                type="text"
                name="phoneNumber"
                placeholder="+380XXXXXXXXX"
              />
              <ErrorMessage
                className={styles.error}
                name="phoneNumber"
                component="span"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.inputCaption}>Email: </span>
              <Field
                className={styles.input}
                type="email"
                name="email"
                placeholder="your@mail"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.inputCaption}>Date of Birth: </span>
              <Field className={styles.input} type="date" name="birthday" />
              <ErrorMessage
                className={styles.error}
                name="birthday"
                component="span"
              />
            </label>
            <button type="submit">Save</button>
            <button type="reset">Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactsForm;
