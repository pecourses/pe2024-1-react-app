import { ErrorMessage, Field, Form, Formik } from "formik";
import classNames from "classnames";
import { CONTACTS_VALIDATION_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./ContactsForm.module.sass";
import Input from "../Input";

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

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
    label: styles.label,
    caption: styles.inputCaption,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CONTACTS_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <Input
            name="userName"
            label="Name:"
            type="text"
            placeholder="Name"
            classes={classes}
            autoFocus
          />

          <Input
            name="phoneNumber"
            label="Phone number:"
            type="text"
            placeholder="+380123456789"
            classes={classes}
          />

          <Input
            name="email"
            label="Email:"
            type="email"
            placeholder="your@mail"
            classes={classes}
          />

          <Input
            name="birthday"
            label="Birthday:"
            type="date"
            classes={classes}
          />
          <button type="submit">Save</button>
          <button type="reset">Reset</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactsForm;
