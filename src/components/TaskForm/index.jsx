import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { taskShema } from '../../utils/validationShemas';
import styles from './TaskForm.module.scss';
import Input  from './Input';


const TaskForm = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ content: '' }}
        onSubmit={onSubmit}
        validationSchema={taskShema}
      >
        <Form className={styles.form}>
          <Input type="text" name="content" placeholder="enter task" />
          <input type="submit" value="Add" />
        </Form>
      </Formik>
    </div>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;