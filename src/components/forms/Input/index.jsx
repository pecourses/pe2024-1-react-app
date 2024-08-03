import { Field } from "formik";
import classNames from "classnames";

function Input({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta, // touched, error
      }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: meta.touched && !meta.error,
          [classes.invalid]: meta.touched && meta.error,
        });

        return (
          <label className={classes.label}>
            <span className={classes.caption}>{label}</span>
            <input className={inputClassNames} {...restProps} {...field} />
            {meta.touched && meta.error && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
