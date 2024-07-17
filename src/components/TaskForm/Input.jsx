import { useField, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './TaskForm.module.scss';



const Input = (props) => {
    const [field, meta] = useField(props);
    const inputClasses = cx({ [styles.invalid]: meta.touched && meta.error });
    return (
      <>
        <input className={inputClasses} {...field} {...props} />
        <ErrorMessage name="content" component="div" />
      </>
    );
  };

  export default Input;