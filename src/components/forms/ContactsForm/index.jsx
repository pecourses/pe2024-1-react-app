import { ErrorMessage, Field, Form, Formik } from "formik";
import { CONTACTS_VALIDATION_SCHEMA } from "../../../utils/validationSchemas";

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
          <Form>
            <label>
              <span>Name: </span>
              <Field
                type="text"
                name="userName"
                placeholder="User Name"
                autoFocus
              />
              <ErrorMessage name="userName" />
            </label>
            <label>
              <span>Phone: </span>
              <Field
                type="text"
                name="phoneNumber"
                placeholder="+380XXXXXXXXX"
              />
              <ErrorMessage name="phoneNumber" />
            </label>
            <label>
              <span>Email: </span>
              <Field type="email" name="email" placeholder="your@mail" />
              <ErrorMessage name="email" />
            </label>
            <label>
              <span>Date of Birth: </span>
              <Field type="date" name="birthday" />
              <ErrorMessage name="birthday" />
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
