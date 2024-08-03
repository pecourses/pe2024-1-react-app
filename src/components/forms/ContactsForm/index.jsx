import { Form, Formik } from "formik";
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
        {formikProps => <Form></Form>}
      </Formik>
    </div>
  );
}

export default ContactsForm;
