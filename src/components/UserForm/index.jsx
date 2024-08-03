import { Formik } from "formik";

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => {
        // console.log(formikProps);
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input
              type="text"
              name="userName"
              value={formikProps.values.userName}
              onChange={formikProps.handleChange}
            />
            <button type="submit">OK</button>
            <button type="reset" disabled={!formikProps.dirty}>
              Reset
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default UserForm;
