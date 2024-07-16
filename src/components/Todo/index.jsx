import { Formik, Form, Field } from "formik";
import useTodo from "../../hooks/useTodo";
import Task from "../Task/imdex";

const Todo = () => {
  const { tasks, addTask , setIsDone} = useTodo([
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
        <Formik initialValues={{ content: "" }} onSubmit={onSubmit}>
          <Form>
            <Field name="content" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
      </div>
      <div>
        <h3>task list</h3>
        <ol>
          {tasks.map((task) => (
            <Task key={task.id} task={task} setIsDone={setIsDone} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
