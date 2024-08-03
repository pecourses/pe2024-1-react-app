import { ErrorMessage, Field, Form, Formik } from "formik";
import { USER_NAME_SCHEMA } from "../../utils/validationSchemas";

// Formik взяв на себе керуванням станом керованого компонента
// + містить шаблонний код його обробників
function UserForm() {
  const initialValues = { userName: "" };

  const handleSubmit = (value, formikBag) => {
    console.log(value);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_NAME_SCHEMA}
    >
      <Form>
        <Field type="text" name="userName" />
        <ErrorMessage name="userName" />
        <button type="submit">OK</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}

export default UserForm;
