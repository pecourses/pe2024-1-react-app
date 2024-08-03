import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const USER_NAME_SCHEMA = yup.object({
  userName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z]/)
    .required(),
});

// Formik взяв на себе керуванням станом керованого компонента
// + містить шаблонний код його обробників
function UserForm() {
  // const [name, setName] = useState('')

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
      {formikProps => (
        // <form onReset={formikProps.handleReset} onSubmit={formikProps.handleSubmit} {...props} />
        <Form>
          <Field
            type="text"
            name="userName"
            // value={formikProps.values.userName}
            // onChange={formikProps.handleChange}
          />
          {/* {formikProps.errors.userName && (
            <span>{formikProps.errors.userName}</span>
          )} */}
          <ErrorMessage name="userName" />
          <button type="submit">OK</button>
          <button type="reset" disabled={!formikProps.dirty}>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
