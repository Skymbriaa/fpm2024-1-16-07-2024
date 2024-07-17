import { Formik, Form, Field , ErrorMessage } from "formik";
import useTodo from "../../hooks/useTodo";
import Task from "../Task/imdex";
import { taskShema } from "../../utils/validationShemas";

const Todo = () => {
  const { tasks, addTask , setIsDone , deleteTask} = useTodo([
    { id: '1', content: "test task", isDone: false },
  ]);

  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  return (
    <section>
      {" "}
      <h2>Todo</h2>
      <div>
        <Formik initialValues={{ content: "" }} onSubmit={onSubmit} validationSchema={taskShema}>
          <Form>
            <Field name="content" />
            <ErrorMessage name="content" component="div"/>
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </div>
      <div>
        <h3>task list</h3>
        <ol>
          {tasks.map((task) => (
            <Task 
            key={task.id} 
            task={task} 
            setIsDone={setIsDone} 
            deleteTask={deleteTask}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
